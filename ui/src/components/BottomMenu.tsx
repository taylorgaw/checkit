import { Icon } from "semantic-ui-react";

type BottomMenuProps = {
    handleClickAdd: () => void;
}

const BottomMenu: React.FC<BottomMenuProps> = (props) => {
    const { handleClickAdd } = props
    return (
        <div className="bottom-menu">
            <Icon
                name='map marker alternate' 
                size='big'
                link
                inverted
                circular
                className='menu-item menu-button'
                onClick={handleClickAdd}
            />
        </div>
    )
};

export default BottomMenu;