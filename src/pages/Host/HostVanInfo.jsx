import { useOutletContext } from "react-router-dom";


export default function HostVanInfo() {
    
    const { van } = useOutletContext();

    return (
        <div className="font-bold space-y-5">
            <h4>Name: <span className="font-normal">{van.name}</span></h4>
            <h4>Category: <span className="font-normal">{van.type}</span></h4>
            <h4>Description: <span className="font-normal">{van.description}</span></h4>
            <h4>Visibility: <span className="font-normal">public</span></h4>
        </div>
    )
}