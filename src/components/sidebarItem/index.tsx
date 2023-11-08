import styles from './item.module.scss';
import { FunctionComponent } from 'react';
import '../../styles/index.scss';
import { ReactNode } from 'react';


interface ItemProps {
    content?: string;
    icon?: ReactNode;
}

export const SideBarItem: FunctionComponent<ItemProps> = ({content, icon}) => {

    
    return(
        <div className={styles.sidebar__item}>
            <span className='span two'> {icon} {content}</span>
        </div>
    )
}