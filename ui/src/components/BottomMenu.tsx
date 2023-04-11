import { Icon } from "semantic-ui-react";

type BottomMenuProps = {
    handleClickAdd: () => void;
    handleClickUser: () => void;
}

const BottomMenu: React.FC<BottomMenuProps> = (props) => {
    const { handleClickAdd, handleClickUser} = props
    return (
        <div className="bottom-menu">
            <Icon 
                name='sliders horizontal' 
                size='big' 
                link
                inverted
                className='menu-item menu-button'
                onClick={handleClickUser}
            />
            <Icon
                name='plus' 
                size='big'
                link
                inverted
                circular
                className='menu-item menu-button'
                onClick={handleClickAdd}
            />
            <Icon 
                name='user circle' 
                size='big' 
                link
                inverted
                className='menu-item menu-button'
                onClick={handleClickUser}
            />
        </div>
    )
};

export default BottomMenu;