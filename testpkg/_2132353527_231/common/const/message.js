module.exports = {
    MSG_ALBUM_PHOTOS_REACH_LIMIT_1: "影集照片已达100张限制，更换照片请先移除已选中的照片",
    MSG_ALBUM_PHOTOS_REACH_LIMIT_2: "影集照片已达100张限制，多出的照片已保存到已上传照片",
    MSG_ALBUM_PHOTOS_REACH_LIMIT_3: "影集照片已达100张限制",
    MSG_ALBUM_VIDEOS_REACH_LIMIT: "影集视频已达10部限制",
    MSG_ALBUM_RESOURCE_REPEATED: "该资源已经存在",
    MSG_FORBIDDEN_PRODUCE: "因为您多次制作包含违法违规内容，因此您的制作权已被封禁!",
    MSG_EXIST_SAME_PHOTO: "该张照片已存在",
    MSG_KEEP_ONE_PHOTO_AT_LEAST: "请至少保留一张照片",
    MSG_ALREADY_FIRST: "已经是第一张了",
    MSG_ALREADY_LAST: "已经是最后一张了",
    MSG_ONLY_TEN_STICKER: "只能添加10张贴纸",
    MSG_ONLY_TEN_TEXT: "只能添加10条文字",
    MSG_PLEASE_SELECT_PHOTO_FIRST: "亲，请先选择照片",
    MSG_SURE_REMOVE_CHECKED_PHOTOS: "要移除勾选的照片吗？",
    MSG_SURE_REMOVE_ALL_PHOTOS: "要移除全部照片吗？",
    MSG_SUBTITLE_REACH_LIMIT: "字幕长度不能超过32个字",
    MSG_ALBUM_TITLE_REACH_LIMIT: "影集标题不能超过64个字",
    MSG_ALBUM_STORY_REACH_LIMIT: "影集故事不能超过480个字",
    MSG_ALBUM_PRODUCER_REACH_LIMIT: "制作人长度不能超过16个字",
    MSG_ALREADY_XNG_USER: "您已经是小年糕的关注用户了 ^_^",
    MSG_NOT_SUPPORT_EMOJI: "字幕暂不支持表情哦",
    MSG_SAVE_ALBUM_STORY_TIP: "影集故事已修改，是否保存？",
    MSG_SAVE_PRODUCER_STORY_TIP: "作者已修改，是否保存？",
    MSG_SAVE_ALBUM_TITLE_TIP: "标题已修改，是否保存？",
    MSG_SAVE_ARTICLE_TEXT_TIP: "文字内容已修改，是否保存？",
    MSG_SURE_ALBUM_DELETE: "删除后，已分享或收藏的影集链接将无法播放，是否继续？",
    MSG_SURE_ARTICLE_DELETE: "删除后，已分享或收藏的图文链接将无法查看，是否继续？",
    MSG_VIDEO_SIZE_LIMIT: "视频大小不能超过10M",
    MSG_ALBUM_PUBLIC: "其他人可以通过个人主页查看您的影集",
    MSG_ARTICLE_PUBLIC: "其他人可以通过个人主页查看您的图文",
    MSG_ALBUM_PRIVATE: "其他人只有通过您主动分享才能查看您的影集",
    MSG_ARTICLE_PRIVATE: "其他人只有通过您主动分享才能查看您的图文",
    MSG_NOT_SHOW_SUBTITLES: "此模板不展示字幕，如需展示字幕，建议您选择其他模板",
    shareMVMessage: function(_, E) {
        return "" === _ || _.indexOf("彭丽媛") >= 0 || _.indexOf("宋祖英") >= 0 ? "一首好听的歌曲送给您" : [ "一曲《" + _ + "》天籁之音，百听不腻！", "一首《" + _ + "》唱出了多少人的心声，好听！", "一首《" + _ + "》一个时代的音符，每次都感人肺腑！", "一首《" + _ + "》听得心醉，勾起满满的回忆！", "前奏一起，眼泪不听话的留下来，一首《" + _ + "》送给大家！", "一首《" + _ + "》歌美人美，好听醉了！", "一首《" + _ + "》嗓音耐人寻味，值得回味！", "一首《" + _ + "》唱得真好，句句深入人心！", "一首《" + _ + "》被歌词感动到了，听到心醉！", "一首《" + _ + "》唱得好听之极，耳朵怀孕！", "一首《" + _ + "》清脆的歌声让人心醉！", "一首《" + _ + "》好听到哭了，无法抗拒美妙的歌声！", "一首《" + _ + "》太有感觉了，唱出了经典的味道！", "辛苦了一天，听听歌养养心！一首《" + _ + "》送给你！", "初听不识曲中意，再听已是曲中人！一首《" + _ + "》请欣赏！", "一首《" + _ + "》旋律上口，听一遍就爱上了！", "听歌一定得看词，听出满满回忆！一首《" + _ + "》送给大家！", "看懂歌词，你们会哭出来！一首《" + _ + "》送给大家！", "被歌词感动到了，听得心醉！一首《" + _ + "》送给大家！", "此曲只应天上有，人生难得几回闻。一首《" + _ + "》送给大家！", "曲声婉转动听，让人赞不绝口，令我心潮澎湃！一首《" + _ + "》送给大家！", "一首《" + _ + "》优美的灵魂，优美的歌谣，听着让我心醉！", "一首《" + _ + "》优雅的曲调让我回味无穷！", "这是我第一次形容一首歌很美！一首《" + _ + "》请欣赏！", "一首《" + _ + "》听得我都入迷了，仿佛置身于歌中。" ][Math.floor(10 * Math.random())];
    }
};