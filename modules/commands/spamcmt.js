module.exports.config = {
  name: "spamcmt",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "Vtuan",
  description: "no",
  commandCategory: "Hệ Thống",
  cooldowns:5,
  envConfig: {
    spamDelay: 1.5  
  }
};






module.exports.run = async function({ api, event, args, handleReply }) {
  const botID = api.getCurrentUserID();

  if (args.length < 2) {
    const usageMessage = 'Cách dùng lệnh: spamcmt <id của bài viết> <số lần>';
    return api.sendMessage(usageMessage, event.threadID, event.messageID);
  }
  const postId = args[0]; // ID của bài viết (được người dùng nhập)
  const times = parseInt(args[1], 10); // Số lần spam (được người dùng nhập)
  if (isNaN(times) || times < 1) {
    return api.sendMessage('Vui lòng nhập một số lần hợp lệ để spam.', event.threadID, event.messageID);
  }

  const comment = [
    "Chớ nghe lời phỉnh tiếng phờ\nThò tay vào lờ, mắc kẹt cái hom",
  "Măng chua nấu cá ngạch nguồn\nSự đời đắp đổi, khi buồn khi vui.",
  "Yêu nhau xé lụa may quần\nGhét nhau kể nợ kể nần nhau ra",
  "Ai ơi chớ vội cười nhau\nCây nào mà chẳng có sâu chạm cành",
  "Khi giàu chẳng có đỡ ai\nĐến khi hoạn nạn chẳng ai đỡ mình",
  "Ở sao cho vừa lòng người\nỞ rộng người cười, ở hẹp người chê.",
  "Chim khôn chưa bắt đã bay,\nNgười khôn ít nói, ít hay trả lời",
  "Ăn quả nhớ kẻ trồng cây,\nĂn khoai nhớ kẻ cho dây trồng khoai",
  "Gió mùa thu anh ru em ngủ\nEm ngủ rồi……anh cạy tủ anh đi",
  "Những đêm dài ngồi chơi vi tính\nBỗng bàng hoàng khi nhìn thấy roi mây",
  "Trước mắt em anh là thằng hai lúa\nSau lưng em anh là chúa giang hồ",
  "Nhớ quá khứ buồn rơi nước mắt\nNhìn tương lai lạnh toát mồ hôi.",
  "Ta về ta tắm ao ta\nSảy chân chết đuối có người nhà vớt lên",
  "Ta về ta tắm ao ta\nDù trong dù đục vẫn là cái ao",
  "Bình tĩnh tự tin không cay cú\nÂm thầm chịu đựng trả thù sau.",
  "Tình chỉ đẹp khi còn dang dở\nCưới nhau về tắt thở càng nhanh",
  "Vẽ hình em lên cát\nRồi hôn em một phát\nÔi cuộc đời chua chát\nToàn là đất với cát",
  "Đời nào bánh đúc có xương\nĐời nào cờ rút lại thương chúng mình.",
    "Chớ nghe lời phỉnh tiếng phờ\nThò tay vào lờ, mắc kẹt cái hom",
  "Măng chua nấu cá ngạch nguồn\nSự đời đắp đổi, khi buồn khi vui.",
  "Yêu nhau xé lụa may quần\nGhét nhau kể nợ kể nần nhau ra",
  "Ai ơi chớ vội cười nhau\nCây nào mà chẳng có sâu chạm cành",
  "Khi giàu chẳng có đỡ ai\nĐến khi hoạn nạn chẳng ai đỡ mình",
  "Ở sao cho vừa lòng người\nỞ rộng người cười, ở hẹp người chê.",
  "Chim khôn chưa bắt đã bay,\nNgười khôn ít nói, ít hay trả lời",
  "Thuốc đắng dã tật, sự thật mất lòng.",
  "Một lời nói dối, sám hối bảy ngày.",
  "Nói ngọt lọt đến xương",
  "Miếng ngon nhớ lâu, lời đau nhớ đời",
  "Lưỡi sắc hơn gươm",
  "Lưỡi không xương, nhiều đường lắt léo.",
  "Sẩy chân còn hơn sẩy miệng.",
  "Tiếng lành đồn xa, tiếng dữ đồn xa.",
  "Một người thì kín, hai người thì hở.",
  "Nói thì dễ, làm thì khó.",
  "Tre non dễ uốn",
  "Bé chẳng vin, cả gãy cành.",
  "Yêu cho vọt, ghét cho chơi",
  "Mẹ dạy thì con khéo, bố dạy thì con khôn.",
  "Học ăn học nói, học gói học mở",
  "Dốt đến đâu, học lâu cũng biết.",
  "Người vụng đan thúng giữa đường.",
  "Không thầy đố mày làm nên.",
  "Học thày không tày học bạn.",
  "Có tích mới dịch nên tuồng.",
  "Văn hay chẳng lo dài dòng.",
  "Văn mình, vợ người.",
  "Ở hiền gặp lành.",
  "Ở tinh gặp ma, ở quỷ gặp quái, gian tà gặp nhau.",
  "Nọc người bằng mười nọc rắn.",
  "Một đời làm hại, bại hoại ba đời.",
  "Hùm giết người hùm ngủ,\nNgười giết người thức đủ năm canh.",
  "Phụ vợ, không gặp vợ.",
  "Hiền quá hóa ngu.",
  "Giết một con cò, cứu trăm con tép.",
  "Đẹp nết hơn đẹp người.",
  "Cái nết đánh chết cái đẹp.",
  "Đói cho sạch, rách cho thơm.",
  "Chết trong còn hơn sống đục.",
  "Xấu hay làm tốt, dốt hay nói chữ.",
  "Ai ưa dưa khú, bầu già.",
  "Tốt đẹp phô ra, xấu xa đậy lại.",
  "Bạc đầu chưa hết dại.",
  "Khôn ba năm, dại một giờ.",
  "Người khôn ăn nói nửa chừng\nĐể cho người dại vừa mừng vừa lo.",
  "Khôn làm văn tế, dại làm văn bia.",
  "Ăn cỗ đi trước, lội nước đi sau.",
  "Chẳng có dại nào giống dại nào.",
  "Ngu si hưởng thái bình",
  "Thằng dại làm hại thằng khôn.",
  "Khôn cho người ta sợ,\n    Dại cho người ta thương,\n    Dở dở ương ương tổ cho người ta ghét.",
  "Vụng chèo khéo chống.",
  "Vụng múa chê đất lệch.",
  "Hay thì khen, hèn thì chê.",
  "Mười quan tiền công,\n    Không bằng một đồng tiền thưởng.",
  "Trâu chết để da, người chết để tiếng.",
  "Tốt danh hơn lành áo.",
  "Lắm người yêu hơn nhiều kẻ ghét.",
  "Yêu trẻ, trẻ đến nhà; yêu già, già để phúc.",
  "Yêu nhau chín bỏ làm mười\nCó mặt thì mắng, vắng mặt thì thương.",
  "Yêu nhau lắm, cắn nhau đau.",
  "Yêu nên tốt, ghét nên xấu.",
  "Yêu ai yêu cả đường đi,\nGhét nhau ghét cả tông chi họ hàng.",
  "Ghét nhau đào đất đổ đi",
  "Người có lúc vinh lúc nhục,\n    Nước có lúc đục lúc trong.",
  "Sướng lắm, khổ nhiều.",
  "Thương người như thể thương thân",
  "Lá lành đùm lá rách\n    Ăn nhạt mới biết thương mèo.",
  "Bỏ thì thương, vương thì tội.",
  "Ăn quả nhớ kẻ trồng cây.",
  "Uống nước nhớ nguồn.",
  "Một đêm nằm một năm ở.",
  "Đường mòn, ân nghĩa không mòn.",
  "Chanh chua chớ phụ, ngọt bòng chớ ham.",
  "Hoài thóc nuôi cò rừng",
  "Được chim bẻ ná, được cá quên nơm.",
  "Ăn cháo đái bát.",
  "Chưa khỏi rên đã quên thầy.",
  "Có xương sông, tình phụ lá lốt.",
  "Có trăng, phụ đèn.",
  "Một câu nhịn là chín câu lành.",
  "Tránh voi chẳng xấu mặt.",
  "Con gà tức nhau tiếng gáy.",
  "Đánh nhau chia gạo, chào nhau ăn cơm.",
  "Cả giận mất khôn.",
  "Hơi đâu mà giận người dưng.",
  "Một đời kiện, chín đời thù.",
  "Ăn ngay nói thật, mọi tật mọi lành.",
  "Cây ngay chẳng sợ chết đứng",
  "Có tật giật mình, có tình kinh trong bụng.",
  "Thẳng mực tàu đau lòng gỗ.",
  "Mất lòng trước, được lòng sau.",
  "Mật ngọt chết ruồi,\n    những nơi cay đắng là nơi thật thà.",
  "Trâu đồng nào ăn cỏ đồng ấy.",
  "Ăn cây nào rào cây ấy.",
  "Thân trâu trâu lo, thân bò bò liệu.",
  "Cha chung không ai khóc.",
  "Cháy nhà hàng xóm, bình chân như vại.",
  "Hoài tiền mua pháo, mượn người đốt.",
  "Việc nhà thì nhác, việc chú bác thì siêng.",
  "Có vay có trả, mới thỏa lòng nhau.",
  "Cá mè một lứa.",
  "Tắt đèn nhà ngói cũng như nhà tranh.",
  "Làm quan ăn lộc vua, ở chùa ăn lộc phật.",
  "Ngày dưng thì chẳng chắp gai,\n    đến khi có cá mượn chài ai cho.",
  "Người lười đất không lười.",
  "Mồm miệng đỡ chân tay.",
  "Giã gạo thì ốm, giã cốm thì khỏe.",
  "Khéo ăn thì no, khéo co thì ấm.",
  "Đo bò làm chuồng.",
  "Yếu chân chạy trước.",
  "Làm khi lành, để dành khi đau",
  "Mất bò mới lo làm chuồng.",
  "Có mình thì giữ.",
  "Buôn tàu bán b, không bằng ăn dè hà tiện.",
  "Đãi cứt sáo lấy hạt đa,\n    đãi cứt gà lấy hạt tấm.",
  "Kiếm củi ba năm thiêu một giờ",
  "Đời cha vo tròn, đời con bóp bẹp",
  "Sông lở cát bồi",
  "Được lòng ta, xót xa lòng người",
  "Bói rẻ còn hơn ngồi không",
  "Chẳng được con trắm con chép, \n    cũng được mớ tép mớ tôm",
  "Thả con săn sắt, bắt con cá rô",
  "Lọt sàng xuống nia",
  "Lá rụng về cội",
  "Cơm không ăn, gạo còn đó",
  "Gạo đổ, hót chẳng đầy thưng",
  "Mất cả chì lẫn chài",
  "Được một bữa cơm người,\n    mất mười bữa cơm nhà.\n",
  "Đã khó, chó cắn thêm",
  "Biết tội đâu mà tránh,\n    biết phúc đâu mà tìm.",
  "Buồn ngủ lại gặp chiếu manh\n    hay ăn làm biếng gặp anh đứng đường.",
  "Đi đêm lắm có ngày gặp ma",
  "Bốn chín chưa qua, năm ba đã tới",
  "Tránh vỏ dưa, gặp vỏ dừa",
  "Chạy trời không khỏi nắng",
  "Thuốc chữa bệnh, chẳng chữa được mệnh",
  "Khi nên, trời cũng chiều người",
  "Năm ngón tay có ngón dài ngón ngắn",
  "Ai uốn câu cho vừa miệng cá",
  "Thánh cũng có khi nhầm",
  "Bới bèo ra bọ",
  "Đánh rắn phải đánh dập đầu",
  "Đã tu thời tu cho trót.",
  "Có chí thì nên.",
  "Mưu cao chẳng bằng chí dày",
  "Kiến tha lâu cũng đầy tổ",
  "Có công mài sắt, có ngày nên kim",
  "Năng nhặt chặt bị",
  "Trăm bó đuốc cũng vớ được con ếch",
  "Còn nước còn tát",
  "Thắng không kiêu, bại không nản",
  "Sóng cả chớ ngã tay chèo",
  "Vua thua thằng liều",
  "Con mẹ đẻ con con\n    Còn gà trống gà mái thì còn gà giò ",
  "Trời không đóng cửa ai",
  "Ai giàu ba họ, ai khó ba đời",
  "Cờ đến tay ai người ấy phất",
  "Bút sa, gà chết",
  "Xay lúa thì thôi ẵm em",
  "Lắm sãi không ai đóng cửa chùa",
  "Bụng làm da chịu",
  "Có gan ăn cắp, có gan chịu đòn",
  "Chó gầy hổ mặt người nuôi",
  "Bắn súng không nên, phải đền đạn",
  "Trăm dâu đổ đầu tằm ",
  "Trọc đầu càng mát",
  "Mèo nhỏ bắt chuột con",
  "Rộng làm kép, hẹp làm đơn",
  "Ốc chẳng mang nổi mình ốc\n    ốc lại còn mang cọc cho rêu",
  "Ai dám đánh đu với tinh ",
  "Chó ghẻ có mỡ đằng đuôi",
  "Chửa học bò đã lo học chạy",
  "Chưa võ bọng cứt đã đòi bay bổng",
  "Ếch ngồi đáy giếng, coi trời bằng vung",
  "Chó cậy gần nhà, gà cậy gần chuồng",
  "Thân lừa ưa nặng",
  "Mạnh dùng sức, yếu dùng chước ",
  "Có cháo hỏi chè",
  "Đứng núi này trông núi nọ",
  "Điếc hay ngóng, ngọng hay nói",
  "Ăn mày đòi xôi gấc",
  "Già còn chơi trống bỏi",
  "Con có khóc mẹ mới cho bú",
  "Ai biết ngứa đâu mà gãi",
  "Ếch no khó nhử mồi",
  "Chê của nào trời trao của ấy",
  "Chê tôm lại phải ăn tôm,\n    chê rau muống héo, lại ôm dưa già.",
  "Ăn trứng thì đừng ăn con.",
  "Được thể dễ nói khoác",
  "Tế sớm khỏi ruồi",
  "Gió chiều nào che chiều ấy",
  "Châu chấu thấy đỏ lửa thì vào.",
  "Theo đóm ăn tàn",
  "Nhờ gió bẻ măng",
  "Đục nước béo cò",
  "Giậu đổ bìm leo",
  "Chợ chưa họp, kẻ cắp đã đến",
  "Vỏ quýt dày có móng tay nhọn",
  "Kẻ cắp gặp bà già",
  "Mềm nắn rắn buông",
  "Lành làm gáo, vỡ làm môi",
  "Hòn đất ném đi, hòn chì ném lại",
  "Mâm cao đánh ngã bát đầy",
  "Ở xứ mù anh chột làm vua",
  "Gần chùa gọi bụt bằng anh",
  "Cháy nhà ra mặt chuột",
  "Đâm lao phải theo lao",
  "Trót đa mang phải đeo bòng",
  "Sai một li đi một dặm",
  "Tham thì thâm, nhầm thì thiệt",
  "Chết sông chết suối, không ai chết đuối đọi đèn",
  "Có nước có cá",
  "Thóc đâu bồ câu đấy",
  "Nằm giữa không mất phần chân",
  "Cơm vào miệng còn rơi",
  "Một mất mười ngờ",
  "Cóc có gan cóc, kiến có gan kiến.",
  "Máu trâu cũng như máu bò",
  "Lòng vả cũng như lòng sung",
  "Ba thưng cũng vào một đấu",
  "Suy bụng ta ra bụng người",
  "Bói ra ma, quét nhà ra rác",
  "Giang sơn đâu, anh hùng đấy",
  "Cơm đâu no chó, thóc đâu no gà",
  "Quá mù ra mưa.",
  "Chín quá hóa nẫu",
  "Trèo cao ngã đau",
  "Thắm lắm phai nhiều",
  "Già néo đứt dây",
  "Chọn mặt gửi vàng",
  "Đi với phật mặc áo cà sa\nđi với ma mặc áo giấy",
  "To đầu khó chui",
  "Ở bầu thì tròn, ở ống thì dài",
  "Rau nào sâu nấy",
  "Gần lửa rát mặt",
  "Cháy thành vạ lây",
  "Gần nhà giàu đau răng ăn cốm\ngần kẻ trộm ốm lưng chịu đòn",
  "Lụt thì lụt cả làng",
  "Được mùa thầy chùa no bụng",
  "Trâu bò húc nhau, ruồi muỗi chết",
  "Rút dây động rừng",
  "Môi hở răng lạnh",
  "Đánh chó ngó chủ nhà",
  "Yêu con chị vị con em",
  "Cách sông nên phải lụy đò",
  "Há miệng mắc quai",
  "Muốn tròn thì phải có khuôn,\nmuốn vuông phải có thước",
  "Đầu xuôi đuôi lọt",
  "Vạn sự khởi đầu nan",
  "Cũ người mới ta",
  "Trước lạ sau quen",
  "Đánh bạc quen tay\nngủ ngày quen mắt",
  "Ăn vặt quen mồm",
  "Ngựa quen đường cũ",
  "Người làm sao, chiêm bao làm vậy",
  "Dốt đặc còn hơn hay chữ lỏng",
  "Tích tiểu thành đại",
  "Góp gió thành bão, góp cây nên rừng",
  "Ba người đánh một, không chột cũng què",
  "Vét nồi ba mươi cũng đầy niêu nốt",
  "Xấu đều hơn tốt lõi",
  "Xanh không thủng cá đi đằng nào",
  "Có bột mới gột nên hồ",
  "Ôm rơm nặng bụng",
  "Chơi dao sắc có ngày đứt tay\n\n# Ca dao\n\n## Ca dao thời kỳ phong kiến\n\n###Lao động và các ngề nghiệp\n"
  ]
  var randomComment = comment[Math.floor(Math.random() * comment.length)].trim();
  global.client.handleReply.push({
    name: this.config.name,
    messageID: event.messageID,
    author: event.senderID,  
    postId: postId,          
    isGroup: event.isGroup,  
    randomComment: randomComment 
  });
  const success = [];
  const failed = [];
  var dem = 0;
  for (let abc = 0; abc < times; abc++) {
    const postID = Buffer.from('feedback:' + postId).toString('base64');
    const ss1 = getGUID();
    const ss2 = getGUID();

    const form = {
      av: botID,
      fb_api_req_friendly_name: "CometUFICreateCommentMutation",
      fb_api_caller_class: "RelayModern",
      doc_id: "4744517358977326",
      variables: JSON.stringify({
        "displayCommentsFeedbackContext": null,
        "displayCommentsContextEnableComment": null,
        "displayCommentsContextIsAdPreview": null,
        "displayCommentsContextIsAggregatedShare": null,
        "displayCommentsContextIsStorySet": null,
        "feedLocation": "TIMELINE",
        "feedbackSource": 0,
        "focusCommentID": null,
        "includeNestedComments": false,
        "input": {
          "attachments": null,
          "feedback_id": postID,
          "formatting_style": null,
          "message": {
            "ranges": [],
            "text": randomComment
          },
          "is_tracking_encrypted": true,
          "tracking": [],
          "feedback_source": "PROFILE",
          "idempotence_token": "client:" + ss1,
          "session_id": ss2,
          "actor_id": botID,
          "client_mutation_id": Math.round(Math.random()*19)
        },
        "scale": 3,
        "useDefaultActor": false,
        "UFI2CommentsProvider_commentsKey": "ProfileCometTimelineRoute"
      })
    };

    try {
      const res = await api.httpPost('https://www.facebook.com/api/graphql/', form, headers);
      if (JSON.parse(res).errors) failed.push(postId);
      else success.push(postId);
      console.log(`Spam thành công ${dem++}`);
    }
    catch(err) {
      failed.push(postId);
    }

    await delay(module.exports.config.envConfig.spamDelay * 1000);
  }
  api.sendMessage(`» Đã comment thành công ${success.length} lần${failed.length > 0 ? `\n» Comment thất bại ${failed.length} lần, postID: ${failed.join(' ')}` : ''}`, event.threadID);
};
