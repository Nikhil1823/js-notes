type PropType = {
  services: string[];
};

const FooterServiceItem = ({ services }: PropType) => {
  return (
    <ul className="flex flex-col gap-y-4">
      {services.map((service) => {
        return (
          <li className="text-[0.875rem]/[20.2px] font-normal">{service}</li>
        );
      })}
    </ul>
  );
};

export default FooterServiceItem;
