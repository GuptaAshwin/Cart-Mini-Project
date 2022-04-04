import React from "react";

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
       
    }
    increaseQuantity = () => {
        console.log('this', this.state);
    }
    render() {
        const { price, qty, title } = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs. {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/753/753317.png" 
                            onClick={this.increaseQuantity}
                            />
                        <img alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/753/753322.png" />
                        <img alt="delete"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/2587/premium/2587433.png?token=exp=1649060815~hmac=9b9988aa174aba21371e60dace29d2ff" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc',
        marginRight: 10
    }
}
export default CartItem;