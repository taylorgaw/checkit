import { Icon } from 'semantic-ui-react';

type TopMenuProps = {
    mapName: string;
    handleClickMenu: () => void;
    handleClickAdd: () => void;
}

const TopMenu: React.FC<TopMenuProps> = (props) => {
    const { mapName, handleClickMenu, handleClickAdd } = props;
    return (
        <div className="top-menu">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
            <Icon 
                name='bars'
                size='large'
                inverted
                link
                className='menu-item menu-button'
                onClick={handleClickMenu}
            />
            <div className='menu-item menu-title'>{mapName}</div>
            <Icon 
                name='plus square outline' 
                size='large' 
                link
                inverted
                className='menu-item menu-button'
                onClick={handleClickAdd}
            />
        </div>
    )
};

export default TopMenu;