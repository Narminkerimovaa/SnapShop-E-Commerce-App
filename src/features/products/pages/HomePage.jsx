import Dropdown from "@/shared/components/Dropdown";
import { useState } from "react";

function HomePage() {
  const sortOptions = [
    { label: "Ucuzdan bahaya", value: "price_asc" },
    { label: "Bahadan ucuza", value: "price_desc" },
  ];
  const [sort, setSort] = useState(null);
  return (
    <Dropdown
      label="Sırala"
      options={sortOptions} 
      value={sort}
      onChange={setSort}
      fullWidth={true}
      placeholder='Seçin'
      />
      
      
  );
}

export default HomePage;
