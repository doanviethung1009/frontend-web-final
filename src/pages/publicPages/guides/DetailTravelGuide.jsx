import React, { useEffect } from "react";
import { useParams ,useLocation, Navigate } from "react-router-dom";
import "../../../styles/DetailTravelGuide.css";
import {
  Carousel,
  Flex,
  Typography,
  Button,
  Row,
  Col,
  ConfigProvider,
} from "antd";
import { NavLink ,Link , useNavigate} from "react-router-dom";

const DetalTravelGuide = () => {
  const { Paragraph, Text, Title } = Typography;
  const navigate = useNavigate();

  const DataTravelGuide = [
    {
      id: "1",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                        đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                        đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
    non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng ${`<span style={{color:"yellow"}}>VEcotra</span>`} tìm
    hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
    dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
    cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
    thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
    chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
    đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
    cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
    cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
    chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
    của người dân.`,
          imageLocation: `https://vnpay.vn/s1/statics.vnpay.vn/2023/10/0s1uo3neeoms1698660990400.png`,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
    khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
    mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
    nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
    hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
    dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
    sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
    hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
    là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
    dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
    điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
    sẽ không làm bạn phải thất vọng.`,
          imageLocation: `https://vnpay.vn/s1/statics.vnpay.vn/2023/10/0s1uo3neeoms1698660990400.png`,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
    nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
    Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
    vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
    khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
    cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
    đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: `https://vnpay.vn/s1/statics.vnpay.vn/2023/10/0s1uo3neeoms1698660990400.png`,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
    không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
    những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
    người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
    những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
    đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
    chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: `https://vnpay.vn/s1/statics.vnpay.vn/2023/10/0s1uo3neeoms1698660990400.png`,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
    nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
    đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
    cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
    nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
    vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
    Bể.`,
          imageLocation: `https://vnpay.vn/s1/statics.vnpay.vn/2023/10/0s1uo3neeoms1698660990400.png`,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
    chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
    Cao Bằng.
    Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
    của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
    Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
    những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
    nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: `https://vnpay.vn/s1/statics.vnpay.vn/2023/10/0s1uo3neeoms1698660990400.png`,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
    như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
    nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
    cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
    `,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
    nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
    nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
    những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: `https://vnpay.vn/s1/statics.vnpay.vn/2023/10/0s1uo3neeoms1698660990400.png`,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
    { id: "2",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
    { id: "3",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
    { id: "4",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
    {
      id: "5",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
    {id: "6",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    }, 
    { id: "7",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
    { id: "8",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
    { id: "9",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
    { id: "10",
      title: `Khám Phá 15 Điểm Du Lịch Mùa Đông Tuyệt Vời Ở Miền Bắc 2024`,
      descriptions: `Du lịch mùa đông miền bắc sẽ mang đến cho nhiều điều hấp dẫn, thời gian gần
                    đây khách du lịch đến miền Bắc để tham quan càng nhiều đặc biệt vào mùa
                    đông. Miền Bắc vào mùa đông sẽ mang đến cho du khách cảng sắc thơ mộng,
non nước hữu tình và cao nguyên đá hùng vĩ mà mẹ thiên nhiên đã ban tặng cho đất nước. Vậy hãy cùng VEcotra tìm
hiểu về top 15 địa điểm du lịch mùa đông miền Bắc thú vị nhất, hãy theo dõi bài viết của chúng tôi dưới đây nhé!`,
      image:
        "https://smiletravel.com.vn/wp-content/uploads/2023/05/Mien-Bac123-1-1024x576.jpg",
      locations: [
        {
          location1: `1.Du lịch Sapa – Fansipan Nóc Nhà Đông Dương`,
          text1: `Du lịch Sapa là địa điểm du lịch nổi tiếng không còn quá xa lạ đối với những bạn trẻ yêu thích hay đam mê xê
dịch, dừng chân tại đây bạn sẽ cảm nhận được bầu không khí vô cùng trong lành của thiên nhiên đã mang lại
cùng với đó là hình ảnh tuyệt vời của thiên nhiên đã ưu ái ban tặng cho nơi đây, Sapa được coi như là một Đà Lạt
thứ 2 của Việt Nam mà mỗi năm thu hút rất nhiều du khách tham quan, dừng chân tại đây bạn sẽ được đắm
chìm trong bầu không khí mát mẻ, sẽ lạnh vô cùng tuyệt vời và hấp dẫn khi đến với mảnh đất xinh đẹp này.`,
          text2: `Đến đây dường như bạn sẽ được đắm chìm trong hình ảnh của núi non xanh mát, mây trắng bồng bềnh vô cùng
đặc sắc cũng như đầy ấn tượng dành cho bạn, ngoài ra đến với mảnh đất này bạn sẽ được trải nghiệm hệ thống
cáp treo hiện đại cao cấp bậc nhất của Việt Nam đảm bảo an toàn, một hình ảnh vô cùng choáng ngợp trước
cảnh sắc tựa như bức tranh. Du lịch Sapa cũng là một trong những địa điểm có nhiều đồng bào dân tộc thiểu số
chính vì thế khi đến Sapa du khách có thể vào sâu bên trong các bản làng để tìm hiểu về cuộc sống hàng ngày
của người dân.`,
          imageLocation: ``,
          imgsource: `Nguồn: Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `2.Khám phá Cao Nguyên Đá Đồng Văn – Hà Giang`,
          text1: `Cao nguyên đá Đồng Văn là địa điểm du lịch hấp dẫn cũng như đặc sắc nhất tại Hà Giang níu chân rất nhiều du
khách. Dừng chân tại cao nguyên đá Đồng Văn bạn ngỡ ngàng trước khung cảnh của núi non hùng vỹ với những
mỏm đá nhiều hình dạng khác nhau có tai mèo vô cùng đẹp mắt cũng như khác lạ đối với khách du lịch một trải
nghiệm mới.`,
          text2: `Những tầng đá tại khu vực Đồng Văn Hà Giang được xếp tầng tầng lớp lớp cùng với đó là một hình ảnh tuyệt vời
hấp dẫn những ngọn núi xanh mát đó xen kẽ cùng với đó là những đám mây trắng đang bay lượn trên bầu trời,
dường như tất cả mang đến cho bạn một vẻ đẹp hùng vĩ đầy cuốn hút cũng như khung cảnh tựa như bức tranh
sơn mài. Đến với khu vực cao nguyên đá Đồng Văn Hà Giang bạn còn được chiêm ngưỡng vẻ đẹp độc đáo với
hình ảnh kiến trúc cổ kính của khu phố cổ Đồng Văn đầy màu sắc hay tham quan khu dinh thự vua Mèo đây đều
là những hình ảnh vô cùng đặc trưng được nhiều du khách yêu thích. Hứa hẹn đây sẽ là một trong những điểm
dừng chân tuyệt vời nhất dành cho bạn khi đến với Hà Giang, nếu ai đến miền Bắc mà chưa một lần ghé thăm địa
điểm Hà Giang thì đây quả là một điều hối tiếc dành cho bạn hãy lên kế hoạch cho bản thân ngay thôi chắc chắn
sẽ không làm bạn phải thất vọng.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `3.Du lịch Mộc Châu – Sơn La`,
          text1: `Mộc Châu – Sơn La địa danh này nổi tiếng với những quả mận chín đỏ, ngọt lịm vào tháng 5 – 6 trĩu quả, tuy
nhiên mùa đông tại Mộc Châu sẽ mang đến cho bạn một vẻ đẹp không kém gì so với tháng 5 – 6. Đến với Mộc
Châu Sơn La bạn sẽ được tận hưởng bầu không khí trong lành mát mẻ đậm chất mùa đông miền Bắc, ngoài ra
vào thời điểm này bạn có cơ hội thưởng thức nhiều món ăn ngon đặc sản của Mộc Châu đầy hấp dẫn dành cho du
khách. Mộc Châu cũng là một vùng đất cao nguyên nổi tiếng về bò sữa và đồi chè xanh mát trải dài. Đến đây bạn
cũng có thể thưởng thức những ly sữa bò vô cùng thơm ngon và nhâm nhi chén trà Mộc Châu trong thời tiết mùa
đông còn gì tuyệt hơn.`,
          text2: `Địa điểm du lịch mùa đông miền Bắc tại Mộc Châu lý tưởng`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `4.Khám Phá Bản Làng Mai Châu – Hòa Bình`,
          text1: `Mai Châu nổi tiếng với nhiều bản làng nhỏ, đây là một thung lũng của tỉnh Hoà Bình, nơi đây quanh năm có bầu
không khí vô cùng trong lành từ thiên nhiên khác so với những địa điểm khác. Không những thế đây là một trong
những địa điểm là địa bàn sinh sống của dân tộc Thái vì thế bạn sẽ có những trải nghiệm để hiểu hơn về con
người và cuộc sống nơi đây. Đến đây bạn được trải nghiệm ngủ trong những căn nhà sàn truyền thống làm bằng
những vật liệu thiên nhiên. Hay được hoà mình và trải nghiệm với nền văn hoá múa sạp và điệu nhảy dân tộc độc
đáo, đắm chìm trong một không gian thiên nhiên với hình ảnh của những cánh đồng lúa xanh tươi bát ngát được
chăm sóc kỹ lưỡng từ đôi bàn tay khéo léo của người dân.`,
          text2: ``,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `5.Hồ Ba Bể – Non Nước Hữu Tình`,
          text1: `Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất của Việt Nam được nhiều người biết đến và được lọt vào top 20 hồ
nước ngọt đẹp nhất thế giới đã đánh giá, địa điểm du lịch này thuộc vườn quốc gia Ba Bể tỉnh Bắc Kạn đặt chân
đến nơi đây vào mùa đông bản sẽ cảm nhận được vẻ đẹp đặc sắc của Hồ Ba Bể. Nằm ẩn mình sâu trong khu vực
cánh cung Ngân Sơn và Bắc Sơn là địa điểm thích hợp dành cho những ai muốn ngắm trọn vẻ đẹp của thiên
nhiên gần gũi với thiên nhiên núi rừng hồ nước trong xanh.`,
          text2: `Đặt chân đến đây du khách sẽ cảm nhận được bầu không khí mát mẻ vô cùng trong lành tươi mát của thảm thực
vật, cùng với đó là được khám phá trải nghiệm đi thuyền lướt trên mặt hồ cảnh nhận rõ được vẻ đẹp của Hồ Ba
Bể.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: `6.Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text1: `Cao Bằng không chỉ nổi tiếng với Khu di tích Pác Pó mang nhiều giá trị về văn hoá nghệ thuật đối với nơi đây, đặt
chân đến với Cao Bằng bạn sẽ không thể bỏ qua Thác Bản Giốc nằm tại xã Đàm Thuỷ huyện Trùng Khánh tỉnh
Cao Bằng.
Chiêm Ngưỡng Thác Bản Giốc – Cao Bằng`,
          text2: `Nơi đây hàng năm thu hút hàng triệu khách đến tham quan, mỗi du khách đến đây đều bị cuốn hút bởi vẻ đẹp
của phong cảnh tự nhiên núi nhấp nhô hùng vỹ mộng mơ không phải vùng đất nào cũng mang lại được. Thác Bản
Giốc mang đến một sự khác biệt, một vẻ đẹp quyến rũ cũng như đầy hấp dẫn khi dừng chân tại vùng đất này,
những dòng nước ào ào chảy theo tạo nên những tia bọt trắng xóa mùa đông sẽ là thời điểm phù hợp để bạn trải
nghiệm du lịch Thác Bản Giốc.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
        {
          location1: ` 7.Du Lịch Thung Nai – Hòa Bình`,
          text1: `Thung Nai một địa điểm du lịch mùa đông đầy hấp dẫn tọa lạc tại khu vực lòng hồ Hoà Bình, Thung Nai giống
như là một hòn đảo xinh đẹp thu nhỏ nên thơ, cùng với đó đến đây bạn sẽ được chiêm ngưỡng cảnh quan thiên
nhiên đa dạng vô cùng tuyệt mỹ giống như bạn đang đứng giữa 1 vịnh Hạ Long trên cạn đầy thú vị đặc biệt vô
cùng, đến đây chiêm ngưỡng khung cảnh non nước hữu tình cảm giác như đang lạc giữa không gian mới lạ.
`,
          text2: `Không những vậy khi đặt chân đến Thung Nai bạn còn được trải nghiệm đi thuyền lướt trên lòng hồ Sông Đà mặt
nước phẳng lặng trong xanh hấp dẫn dành cho khách du lịch, hứa hẹn sẽ là một trong những hành trình và trải
nghiệm vô cùng tuyệt vời khi đến với Thung Nai vào những ngày đông, ngoài ra bạn còn được thưởng thức thêm
những món ăn ngon hấp dẫn đặc sản tại Hòa Bình một kỷ niệm khó quên.`,
          imageLocation: ``,
          imgsource: `Top 7 địa điểm du lịch mùa đông miền Bắc lý tưởng nhất 2024`,
        },
      ],
      status: "Pushlisted",
      postingdate: "11/5/2024",
    },
  ];
  
  //scroll to location in travel guide when use click shortened link
  const location = useLocation();
  useEffect(() => {
    //
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

//
  const { id } = useParams();

  const currentTravelGuide= DataTravelGuide.find(item => item.id===id)
  console.log(currentTravelGuide)

  useEffect(() => {
    //call data by id travel guide

    console.log("=======id:", id);
    //
  }, [id]);
  
  return (
    <div className="container blog-container">
      <Row gutter={[50, 50]} className="row-1" >
        <Col lg={16} xs={24} className="blog-header">
          <Title className="blog-title">{currentTravelGuide.title}</Title>
          <p className="blog-subtitle"><strong><em>{currentTravelGuide.descriptions}</em></strong></p>
          
        </Col>
        <Col lg={8} xs={24} className="blog-link" style={{width:"100%"}}>
          <h4 className="blog-link-title">
            <i>{currentTravelGuide.title}</i>
          </h4>
          <ol className="blog-link-navigate" >
            {currentTravelGuide.locations.map((item, index) => {
              return (
                <Link key={index} to={`#location${index+1}` } >
                   <li>{item.location1}</li>
                </Link>
              );
            })}
          </ol>
        </Col>
      </Row>
      <Row gutter={[50, 50]} className="row-2">
        <Col lg={16} xs={24} className="blog-content">
          {currentTravelGuide.locations.map((item, index) => {
            return (
              <div key={index} className="location-wrap">
                <h3 id={`location${index+1}`} className="title-location">{index+1}.{item.location1}</h3>
                <div className="location-content">
                <p>{item.text1}</p>
                <strong><em>{item.location1}</em></strong>
                <p>{item.text2}</p>
                <img
                  src={item.imageLocation}
                  alt={`image ${item.location1}`}
                />
                <span><em>{item.imgsource}</em></span>
                </div>
              </div>
            );
          })}
        </Col>
        <Col lg={8} xs={24} className="slider-travel-guide">
        <Carousel
          dots={true}
          infinite={false}
          slidesToShow={1}
          slidesToScroll={1}
          rows={4}
          dotPosition="bottom" 
          className="carousel"
          style={{padding:"10px 0px 30px 0px"}}
        >
          {DataTravelGuide.map((item, index) => (
            <div
             key={index} 
             className="carousel-item"
             onClick={()=>{navigate(`/guide/detail/${item.id}/${item.title}`)}}>      
                <Row gutter={[10,10]} align={"middle"} justify={"center"}>
                  <Col flex={'1 0 20%'}>
                  <img
                      src={item.image}
                      style={{
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    /></Col>
                  <Col flex={'1 0 80%'}><strong>{item.title}</strong></Col>
                 
                </Row> 
               
                
               {index%2===0 ? <hr style={{width:'100%',marginTop:"10px"}}/> : <hr style={{width:' 75%',marginTop:"10px"}}/>}
            </div>
          ))}
        </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default DetalTravelGuide;
