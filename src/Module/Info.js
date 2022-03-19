import { Container } from 'react-bootstrap';
import DaumPostcode from 'react-daum-postcode';
import Footer from '../Layout/Footer';
import Address from './Address';




const Info = () => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }
  return (

    <Container>
      <div className="title">
        My Information</div>

      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="id">ID</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="id" id="id" value="로그인 아이디" disabled />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="confirm">Password 확인</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password" id="confirm" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="name">이름</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" id="name" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="sex">성별</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="sex" id="sex" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="phone">연락처</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="phone" id="phone" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="email">이메일</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="email" id="email" />
            </div>
            
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="address">주소</label>
              {/* <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="address" id="address" /> */}
            <Address/>
            </div>
          </fieldset>
        </form>
      </main>

      <div className="ph3">
        <a className="f6 link dim ph3 pv2 mb2 dib white bg-light-purple" href="#0">Reset</a>
      </div>
      <div className="ph3">
        <a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0">Change</a>
      </div>
      <Footer />
    </Container>

  )
}

export default Info;