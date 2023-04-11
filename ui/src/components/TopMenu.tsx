import { Icon } from 'semantic-ui-react';

type TopMenuProps = {
    mapName: string;
    handleClickMenu: () => void;
    handleClickListMenu: () => void;
    isListOpen: boolean;
}

const TopMenu: React.FC<TopMenuProps> = (props) => {
    const { mapName, handleClickMenu, handleClickListMenu, isListOpen } = props;
    return (
        <div className="top-menu">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
            <Icon 
                name='map'
                size='large'
                inverted
                link
                className='menu-item menu-button'
                onClick={handleClickMenu}
            />
            <div className='menu-item menu-title'>{mapName}</div>
            <Icon 
                name={ isListOpen ? 'close' : 'bars'}
                size='large' 
                link
                inverted
                className='menu-item menu-button'
                onClick={handleClickListMenu}
            />
        </div>
    )
};

export default TopMenu;