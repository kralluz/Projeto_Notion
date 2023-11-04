import { IoMdAddCircle } from 'react-icons/io'
import styles from './item.module.scss';
import { FunctionComponent } from 'react';

interface ItemProps {
    content?: string;
    icon?: object;
}

export const SideBarItem: FunctionComponent<ItemProps> = ({content, icon}) => {
    return(
        <div className={styles.sidebar__item}>
            <span>
                {icon}{content}
            </span>
        </div>
    )
}