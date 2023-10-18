import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount } from '../store';
import { changeAge, changeName } from './../store/userSlice';
import { addCount } from '../store/userCart';
import NavberMain from './NavbarMain';

export default function Cart(props) {
    const state = useSelector((state) => {
        return state;
    });
    // console.log('state : ', state);

    //store.js로 요청 보내주는 함수
    const dispatch = useDispatch();
    const basket = state.basket;
    const cart = state.cart;
    // console.log(state.basket);
    console.log('state : ', state);

    const { id } = useParams();

    const product = props.shoes.find((item, i) => {
        return item.id == id;
    });

    return (
        <>
            {/* {state.user.name} {state.user.age}살의 장바구니
      <button onClick={() => {
        dispatch(changeAge(10))
      }}>버튼</button> */}
            <div className="cart">
                <div className="cartName">
                    <h1>장바구니</h1>
                    <div className="cartName2">
                        <p>
                            통합 멤버쉽 회원으로 가입하시고 당일 사용 가능한
                            5,000포인트 받으세요!
                        </p>
                        <button>로그인</button>
                        <button>회원가입</button>
                    </div>
                    <div className="cartTitle">
                        <div className="cartTitle2">
                            <h2>일반배송</h2>
                        </div>
                        <div className="cartTitle3">전체</div>
                    </div>
                    <div className="shoesDetail">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>선택</th>
                                        <th>사진</th>
                                        <th>상품명</th>
                                        <th>수량</th>
                                        <th>가격</th>
                                        <th>버튼</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.cart.map((item, i) => {
                                        console.log('item : ', item);
                                        return (
                                            <tr key={i}>
                                                {/* <td>{item.id}</td> */}
                                                <td><input type='checkBox'/></td>
                                                <td><img src={`${item.img}`}/></td>
                                                <td>{item.name}</td>
                                                <td>{item.count}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button
                                                        onClick={() => {
                                                            dispatch(
                                                                addCount(i)
                                                            );
                                                        }}
                                                    >
                                                        수량증가
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="shoesDetailMid">
                            <div>사진이미지</div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <span>40p</span>
                                <shan>
                                    통합멤버쉽 회원 가입 시 예상적립 포인트
                                </shan>
                            </div>
                            <div>신발가격</div>
                            <div>
                                <button>삭제</button>
                            </div>
                        </div> */}
                        <div className="shoesDetailBot">
                            <div className="shoesDetailTotal">
                                <span>주문금액</span>
                                <span>총 합 금액</span>
                            </div>
                            <div className="shoesDetailBtn">
                                <button>계속 쇼핑하기</button>
                                <button>주문하기</button>
                            </div>
                        </div>
                    </div>
                    <div className="shoesPrice"></div>
                    <div className="cartChoiceBtn"></div>
                </div>
            </div>
        </>
    );
}

// <table>
// <tr>
//   <td>
//     <img src={`https://kdt8-kjh-test.s3.ap-northeast-2.amazonaws.com/${product.id}.png`}></img>
//   사진
//   </td>
//   <td>
//     <h5>신발이름</h5>
//     <p>신발설명</p>
//   </td>
//   <td>통합멤버쉽 회원 가입 시 예상적립 포인트</td>
//   <td>가격</td>
//   <td>
//     <button>삭제</button>
//   </td>
// </tr>
// </table>
