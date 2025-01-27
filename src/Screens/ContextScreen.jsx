import {useContext, useState} from 'react';
import { Col, FormControl, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { TxnContext } from '../Stores/TxnContext';

const ContextScreen=props=>{
    //1. create state for your inputs
    const [transaction, setTransaction]=useState({merchant:"",amount:0});
    //2. tie the state as the initial value of the context, with the context wrapper
    return (
        <TxnContext.Provider value={{transaction, setTransaction}}>
            <h3 class="text-center text-danger justify-content-center">All this was achieved with no props</h3>
            <Row className="justify-content-center">
                <Col md='4' xs='6' className="m-3" style={styles.containers}>
                    <MakerComponent />
                </Col>
                <Col md='4' xs='6' className="m-3" style={styles.containers}>
                    <Display1/>
                </Col>
                <Col md='4' xs='6' className="m-3" style={styles.containers}>
                    <Display2/>
                </Col>
                <Col md='4' xs='6' className="m-3" style={styles.containers}>
                    <UpdaterComponent/>
                </Col>
            </Row>
        </TxnContext.Provider>
    )
}

const MakerComponent=()=>{
    //3. import the transaction value and setter into the child components
    const {transaction, setTransaction}=useContext(TxnContext);

    const merchantchangeHandler=event=>{
        setTransaction({
            ...transaction,
            merchant: event.target.value
        })
    }
    const amountchangeHandler=event=>{
        setTransaction({
            ...transaction,
            amount: event.target.value
        })
    }
    return (
        <div>
            <h4>Maker Component</h4>
            <p>
                This component will set the initial value of the context and will cascade it down to the
                other components which listen for it.
            </p>
            <div>
                <FormGroup>
                    <label>Merchant:</label>
                    <FormControl type="text" value={transaction.merchant} onChange={merchantchangeHandler} name="merchant" />
                </FormGroup>
                <FormGroup>
                    <label>Amount:</label>
                    <FormControl type="number" value={transaction.amount} onChange={amountchangeHandler} name="amount" />
                </FormGroup>
            </div>
        </div>
    )
}

const Display1=()=>{
    const {transaction}=useContext(TxnContext);
    return (
        <div>
            <h4>Display Component</h4>
            <p>This component will display the transaction values as they update in real time.</p>
            <ListGroup>
                <ListGroupItem>
                    Merchant: {transaction.merchant}
                </ListGroupItem>
                <ListGroupItem>
                    Amount: {transaction.amount}
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}

const Display2=()=>{
    const {transaction}=useContext(TxnContext); 
    return (
        <div>
            <h4>Display Component (Proof of Concept)</h4>
            <p>This component will display the transaction values as they update in real time.</p>
            <ListGroup>
                <ListGroupItem>
                    Merchant: {transaction.merchant}
                </ListGroupItem>
                <ListGroupItem>
                    Amount: {transaction.amount}
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}

const UpdaterComponent=()=>{
    const {transaction, setTransaction}=useContext(TxnContext);

    const merchantchangeHandler=event=>{
        setTransaction({
            ...transaction,
            merchant: event.target.value
        })
    }

    const amountchangeHandler=event=>{
        setTransaction({
            ...transaction,
            amount: event.target.value
        })
    }
    return (
        <div>
            <h4>Updater Component</h4>
            <p>
                This component will update the contents of the context and will show how it immediately
                affects other components
            </p>
            <div>
                <FormGroup>
                    <label>Merchant:</label>
                    <FormControl type="text" value={transaction.merchant} onChange={merchantchangeHandler} name="merchant" />
                </FormGroup>
                <FormGroup>
                    <label>Amount:</label>
                    <FormControl type="number" value={transaction.amount} onChange={amountchangeHandler} name="amount" />
                </FormGroup>
            </div>
        </div>
    )
}

const styles={
    containers:{
        borderWidth: '1px',
        borderStyle:"solid",
        padding:'15px',
        borderRadius: '5px',
        borderColor: 'blue'
    }
}

export default ContextScreen;