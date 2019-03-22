import React from 'react';
import './Items.css';

class Items extends React.Component {
    renderItems = (item, key) => {
        const { src, className } = item;

        return (
            <li className={className} key={key}>
                <img src={src} alt="pic" />
            </li>
        );
    }

    render() {
        const { items } = this.props;
        return (
            <ul className="portfolio">
                {items.map((item, key) => this.renderItems(item, key))}
            </ul>
        );
    }
}

export default Items;