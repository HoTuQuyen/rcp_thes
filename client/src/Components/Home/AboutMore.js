import React from "react";
import "./AboutMore.css";
import { Link } from "react-router-dom";
import HeaderSub from "./HeaderSub";

const AboutMore = () => {
  return (
    <div className="about-more">
      <HeaderSub />
      <div className="about-more-content">
        <strong className="animate__animated animate__fadeInDown animate__delay-1s">
          More Details We Send You
        </strong>
        <div className="about-more-detail">
          <div className="intro">
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              Trang Web của chúng tôi cung cấp các lược đồ biểu thị các số liệu
              về thành phần Kilocalories, Protein, Fat, Sugar, Salt trong bất kì
              Recipes. Chúng tôi có danh sách các món ăn cố định trong bảng, khi
              bạn muốn tìm hiểu về một món ăn nào đó, hãy search tên món ăn đó
              và chúng tôi sẽ giúp bạn tìm hiểu rằng món ăn đó sẽ chứa các thành
              phần dinh dưỡng so với định mức khoa học trong ăn uống là bao
              nhiêu.
            </p>
          </div>

          <div className="kcal">
            <h1 className="animate__animated animate__fadeInLeft animate__delay-2s">
              Kilocalories: 1 kcal = 1 Cal
            </h1>
            <p className="animate__animated animate__flipInX animate__delay-2s">
              - Lượng Calo trong đồ ăn, thức ăn bạn nạp vào cơ thể để thực hiện
              các chức năng thiết yếu của cơ thể như hít thở, vận động, suy
              nghĩ,... Lượng Calo nạp vào mà không sử dụng hết, nghĩa là dư
              thừa, sẽ được lưu trữ dưới dạng chất béo. Khi bạn nạp vào cơ thể
              lượng Calo nhiều hơn mức bạn đốt cháy thì bạn sẽ tăng cân theo
              thời gian. Ngược lại, bạn sẽ tăng cân. Trẻ em, Phụ nữ, Người cao
              tuổi: 1,600 Kilocalories/Ngày Nam giới: 2.000 Kilocalories/Ngày
              Vận động viên, nông dân và công nhân: 2.400 kilocalories/Ngày
            </p>
          </div>
          <div className="protein">
            <h1 className="animate__animated animate__fadeInLeft animate__delay-2s">
              Protein
            </h1>
            <p className="animate__animated animate__flipInX animate__delay-2s">
              - Protein được tạo ra từ các axit amin, giúp xây dựng và phát
              triển các mô của cơ thể - bao gồm cơ bắp, gân, mạch máu, da, tóc
              và móng. Em bé: Khoảng 10 gram/ngày; Trẻ em ở độ tuổi đi học: 19 -
              34 gram/ngày; Trẻ em trai tuổi thiếu niên: 52 gram/ngày; Trẻ em
              gái tuổi thiếu niên: 46 gram/ngày;. Phụ nữ mang thai hoặc cho con
              bú: Khoảng 71 gram/ngày; Người tham gia môn điền kinh để giải trí:
              1,1 - 1,4 g/kg/ngày; Vận động viên thi đấu hoặc các môn thể thao
              cần sức bền: 1,2 - 2 g/kg/ngày; Vận động viên thể hình: 1,5 - 2,0
              g/kg/ngày.
            </p>
          </div>

          <div className="carbohydrate">
            <h1 className="animate__animated animate__fadeInLeft animate__delay-2s">
              Carbohydrate
            </h1>
            <p className="animate__animated animate__flipInX animate__delay-2s">
              - Vai trò chính của carbohydrate trong cơ thể là để cung cấp năng
              lượng. Phần lớn các dạng carbs sẽ được chuyển hóa thành glucose
              cung cấp năng lượng cho cơ thể. Nếu bạn ăn dư carb so với nhu cầu
              calo mỗi ngày, chúng sẽ chuyển đổi thành chất béo dự trữ trong cơ
              thể. - Có 3 dạng carbohydrates bạn thường nạp trong chế độ ăn hằng
              ngày: Đường: Có vị ngọt, là một chuỗi phân tử ngắn được tìm thấy ở
              trong thức ăn. Ví dụ: Glucose , fructose, galactose và sucrose.
              Tinh bột: Là chuỗi dài phân tử glucose, khi vào cơ thể sẽ được
              phân nhỏ thành glucose để hấp thụ. Chất xơ: Con người không thể
              tiêu hóa chất xơ, nhưng chúng có thể hỗ trợ cho quá trình tiêu
              hóa. Adults – Sugar should not make up more than five per cent of
              the calories adults get from food and drink each day – amounting
              to around seven sugar cubes or a maximum of 30g. Adults: 30g sugar
              20g-30g saturated Children 4-6 year olds: No more than 5 sugar
              cubes or 19g 7-10 year olds: No more than 6 sugar cubes or 24g
            </p>
          </div>
          <div className="fat-nutrition">
            <h1 className="animate__animated animate__fadeInLeft animate__delay-2s">
              Fat
            </h1>
            <p className="animate__animated animate__flipInX animate__delay-2s">
              - Là nhóm dưỡng chất thiết yếu cho cơ thể, cung cấp năng lượng
              quan trọng đồng thời có tác dụng dự trữ năng lượng, chống thấm và
              cách nhiệt. Adults – Males: No more than 30g Women: 20g.
            </p>
          </div>
          <div className="salt">
            <h1 className="animate__animated animate__fadeInLeft animate__delay-2s">
              Salt
            </h1>
            <p className="animate__animated animate__flipInX animate__delay-2s">
              Adults, Children (11 year olds or older): No more than 6 gram
              (1tsp or 2.4g of sodium) Children 1-3 year-olds: No more than 2g
              of salt each day (0.8 sodium) 4-6 year-olds: No more than 3g (1.2g
              sodium) 7-10 limited to 5g a day (2g of sodium)
            </p>
          </div>
          <Link to="/product-list">
            <button className="btn-quote animate__animated animate__fadeInUp animate__delay-3s">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AboutMore;
