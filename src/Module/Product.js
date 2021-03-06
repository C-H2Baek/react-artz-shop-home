import react from 'react';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Footer from '../Layout/Footer';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination'

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const Product = () => {
  return (

    <Container>
      <div className="dt mw6 pv4 pv5-m pv6-ns">
        <div className="dtc v-mid" >
          <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17f96b182a7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17f96b182a7%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.375%22%20y%3D%2295.4%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="mw9" />
        </div>
        <div className="dtc v-top pl3" style={{ textAlign: 'center' }}>



          This Item

          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="size">사이즈</label>
            
            <select id="size" >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>

            
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="quanity">수량</label>
            <input className="pa2 input-reset ba bg-transparent w-90 measure" type="number" name="quanity"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="price">가격</label>
            <input className="pa2 input-reset ba bg-transparent w-90 measure" type="text" name="price" disabled/>
         
          </div>



          <div className="ph3">
            <a className="f6 link dim ph3 pv2 mb2 dib white bg-light-purple" href="#0">Cart</a>
          </div>
          <div className="ph3">
            <a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0">Buy</a>
          </div>


        </div>
      </div>






      <Footer />
    </Container>
  )
}

export default Product;