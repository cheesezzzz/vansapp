import { useOutletContext } from "react-router-dom";


export default function HostVanPricing() {
  const { van } = useOutletContext();


    return (
        <div>
            <h4><span className="font-bold text-lg">${van.price}</span>/day</h4>
        </div>
    )
}