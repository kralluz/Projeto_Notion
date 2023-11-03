import { IoMdAddCircle } from 'react-icons/io'
import styles from './item.module.scss';
import { FunctionComponent } from 'react';

interface ItemProps {
    content?: string;
}

export const SideBarItem: FunctionComponent<ItemProps> = ({content}) => {
    return(
        <div className={styles.sidebar__item}>
            <span>
                <IoMdAddCircle />{content}
            </span>
        </div>
    )
}