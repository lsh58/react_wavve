import React, {useRef} from 'react';

const Footer = () => {

    const noticeList = useRef(null);

    var bln =true;

    const onleftclick = () =>{
        if(bln===true){
            bln=false;
            setTimeout(function(){
                bln=true;
            },500);
        }
    }

    const onrightlick = () =>{
        if(bln===true){
            bln=false;
            setTimeout(function(){
                bln=true;
            },500);
        }
    }

    return (
        <div className="footer">
            <div className="footer__notice">
                <div className="footer__notice__wrapper">
                    <div className="footer__notice__frontWrapper">
                        <sapn className="footer__notice__title">공지사항</sapn>
                        <ul ref={noticeList}>
                            <li>명작관 &#62; CLASSIC 으로 리뉴얼 안내</li> 
                            <li>Wavve CLASSIC 시청왕 이벤트 안내</li> 
                        </ul>
                    </div>
                    <div className="footer__notice__backWrapper">
                        <button className="footer__notice__prevBtn" onClick={onleftclick}>
                            <img src={require("../asset/icon/arrow-notice-left.png")} alt="notice_prevBtn"></img>
                        </button>
                        <button className="footer__notice__nextBtn" onClick={onrightlick}>
                            <img src={require("../asset/icon/arrow-notice-right.png")} alt="notice_prevBtn"></img>
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer__menu">
                <ul>
                    <li>회사소개</li>
                    <li>인재채용</li>
                    <li>서비스 소개</li>
                    <li>이용약관</li>
                    <li className="privacy">개인정보 처리방침</li>
                    <li>고객센터</li>
                </ul>
                <p>
                    <span className="first">콘텐츠웨이브 주식회사</span>
                    <span>대표이사 이태현</span>
                    <span className="last">고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및 공휴일 휴무)</span>
                    <br></br>
                    <span className="first">사업자등록번호 220-88-38020</span>
                    <span>통신판매업 신고번호 : 제 2015-서울마포-0128호</span>
                    <span className="last">통신판매업 정보 공개 : http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</span>
                    <br></br>
                    <span className="first">주소 서울특별시 마포구 상암산로 82, SBS 프리즘 타워 14층</span>
                    <span className="last">전자우편주소 : helpdesk@wavve.com</span>
                    <br></br>
                </p>
                <span className="footer__menu__copyright">
                Copyright&copy; 콘텐츠웨이브&#40;주&#41; All rights reserved.
                </span>
                <div className="footer__menu__etc">
                    <div className="logo"><img src={require("../asset/wavvon logo.png")} alt="wavvonlogo"></img></div>
                    <select>
                        <option>사업자용 웨이브 가입</option>
                        <option>웨이브온 서비스 소개</option>
                        <option>웨이브온 PC방 서비스</option>
                        <option>웨이브온 도서관 서비스</option>
                        <option>웨이브온 병원 서비스</option>
                        <option>웨이브온 숙박 서비스</option>
                        <option>웨이브온 일반 서비스</option>
                    </select>
                    <button className="fb"><img src={require("../asset/icon/fb.png")} alt="facebook"></img></button>
                    <button className="post"><img src={require("../asset/icon/post.png")} alt="naver post"></img></button>
                </div>
            </div>
        </div>
    );
};

export default Footer;