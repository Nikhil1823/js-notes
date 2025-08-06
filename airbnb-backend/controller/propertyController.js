const dbDefs = require("../model/config");
const { idGenerator } = require("../service/idGenerator");

const bulkCreated = async (req, res) => {
  const { data } = req.body;
  const result = await Promise.all(data.map((property) => insertOne(property)));
  return result;
};

const get = async (req, res) => {
  const result = await dbDefs.propertyDbDef.findAll({});
  const orderedData = result.sort((a, b) =>
    a.location.localeCompare(b.location)
  );
  const data = await Promise.all(
    orderedData.map((property) => fechImages(property))
  );
  return data;
};

module.exports = {
  bulkCreated,
  get,
};

const insertOne = async (property) => {
  const priceTemplate = property.offer.split("for");
  const price = priceTemplate[0].trim().split("₹")[1].replace(",", "");
  const stayTemplate = priceTemplate[1].trim().split(" ");
  const duration = Number(stayTemplate[0]);
  const duration_type = stayTemplate[1];

  const propertyTemplate = property.name.split(" in ");
  const property_type = propertyTemplate[0].trim();
  const location = propertyTemplate[1].trim();
  const rating = parseFloat(property.rating);

  const data = await dbDefs.propertyDbDef.create({
    id: idGenerator(),
    property_type,
    tag: property.isGuestFav,
    price,
    duration,
    duration_type,
    rating,
    location,
    address: property.name,
  });
  const imageData = await dbDefs.imagesDbDef.create({
    id: idGenerator(),
    property_id: data.id,
    imageUrl: property.image,
  });
  return { data, imageData };
};

const fechImages = async (property) => {
  const query = {
    where: { property_id: property.id },
  };
  const images = await dbDefs.imagesDbDef.findAll(query);
  const imageUrl = images.map((image) => image.imageUrl);
  property = property.toJSON();
  property.images = imageUrl;
  return property;
};
