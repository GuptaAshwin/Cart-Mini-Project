import React from "react";

class CartItem extends React.Component {

   

    increaseQuantity = () => {
        // console.log('this', this.state);
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        // setState form 2 if previous value is required
        this.setState((prevState) => {
           
            return {
                qty : prevState.qty + 1
            }
        });

    }

    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0){
            return ;
        }
        // setState form 2 if 
        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1
            }
        });

    }

    render() {
        // console.log(this.props);
        const { price, qty, title } = this.props.product;
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
                            src="https://cdn-icons-png.flaticon.com/512/753/753322.png" 
                            onClick={this.decreaseQuantity}/>
                        <img alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3141/3141483.png" />
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