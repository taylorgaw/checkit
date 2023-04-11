import { Icon } from "semantic-ui-react";
import { SideNavOption } from "../types/SideNavTypes";

const OPEN_SIZE = "50%";
const CLOSED_SIZE = "0%";

type CitySideNavProps = {
    title: string;
    options: SideNavOption[];
    isCityOpen: boolean;
    handleClickCityClose: () => void;
}

const CitySideNav: React.FC<CitySideNavProps> = (props) => {
    const {title, options, isCityOpen, handleClickCityClose} = props;

    return (
        <div 
            className="sidenav closebtn" 
            style={{
                width: isCityOpen ? OPEN_SIZE : CLOSED_SIZE
            }}
        >
            <h1 className="sidenav-title">{title}</h1>
            <Icon
                name='close' 
                size='big'
                link
                inverted
                className='closebtn'
                onClick={handleClickCityClose}
            />
            { options.map((option: SideNavOption) => {
                return (
                    <div key={option.name}>
                        <a className="city" href={option.link}>{option.name}</a>
                    </div>
                );
            })}
            <br/>
            <a className="new-city" href="#">+ Create New Map</a>
        </div>
    )
};

export default CitySideNav