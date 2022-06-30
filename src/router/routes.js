/* 路由懒加载 */
/* 首屏 */
const Layout = () =>
  import(/* webpackChunkName: "group-home" */ '../views/Layout.vue')
const HomePage = () =>
  import(/* webpackChunkName: "group-home" */ '../views/home/HomePage.vue')
const PersonalRecom = () =>
  import(
    /* webpackChunkName: "group-home" */ '../views/home/homepageview/PersonalRecom.vue'
  )
/* 登录 和 404*/
const Login = () =>
  import(/* webpackChunkName: "group-login" */ '../views/Login.vue')
const NotFound = () =>
  import(/* webpackChunkName: "group-login" */ '../views/NotFound.vue')
/* 发现页其他 */
const TopList = () =>
  import(
    /* webpackChunkName: "group-homepage" */ '../views/home/homepageview/TopList.vue'
  )
const PlayList = () =>
  import(
    /* webpackChunkName: "group-homepage" */ '../views/home/homepageview/PlayList.vue'
  )
const ArtistList = () =>
  import(
    /* webpackChunkName: "group-homepage" */ '../views/home/homepageview/ArtistList.vue'
  )
const NewMusic = () =>
  import(
    /* webpackChunkName: "group-homepage" */ '../views/home/homepageview/NewMusic.vue'
  )
/* 需登录后才能进入的页面 */
const RecommendSong = () =>
  import(/* webpackChunkName: "group-user" */ '../views/user/RecommendSong.vue')
const PersonalFm = () =>
  import(/* webpackChunkName: "group-user" */ '../views/user/PersonalFm.vue')
const UserEdit = () =>
  import(/* webpackChunkName: "group-user" */ '../views/user/UserEdit.vue')
const PlayListEdit = () =>
  import(
    /* webpackChunkName: "group-user" */ '../views/playlist/PlayListEdit.vue'
  )
const SubScribeView = () =>
  import(
    /* webpackChunkName: "group-user" */ '../views/user/subscribe/SubScribeView.vue'
  )
const SubAlbum = () =>
  import(
    /* webpackChunkName: "group-user" */ '../views/user/subscribe/SubAlbum.vue'
  )
const SubArtists = () =>
  import(
    /* webpackChunkName: "group-user" */ '../views/user/subscribe/SubArtists.vue'
  )
const SubMv = () =>
  import(
    /* webpackChunkName: "group-user" */ '../views/user/subscribe/SubMv.vue'
  )
/* 历史播放 */
const HistoryPlay = () =>
  import(
    /* webpackChunkName: "group-hisplay" */ '../views/historyplay/HistoryPlay.vue'
  )
/* 搜索相关 */
const SearchList = () =>
  import(
    /* webpackChunkName: "group-search" */ '../views/search/SearchList.vue'
  )
/* 各大详情页 */
const PlayListDetail = () =>
  import(
    /* webpackChunkName: "group-detail" */ '../views/playlist/PlayListDetail.vue'
  )
const ArtistDetail = () =>
  import(
    /* webpackChunkName: "group-detail" */ '../views/artist/ArtistDetail.vue'
  )
const AlbumDetail = () =>
  import(
    /* webpackChunkName: "group-detail" */ '../views/album/AlbumDetail.vue'
  )
const VideoDetail = () =>
  import(
    /* webpackChunkName: "group-detail" */ '../views/video/VideoDetail.vue'
  )
const UserDetail = () =>
  import(/* webpackChunkName: "group-detail" */ '../views/user/UserDetail.vue')
/* 视频页首屏 */
const VideoView = () =>
  import(
    /* webpackChunkName: "group-video" */ '../views/videoview/VideoView.vue'
  )
const Video = () =>
  import(/* webpackChunkName: "group-video" */ '../views/videoview/Video.vue')
const MusicVideo = () =>
  import(
    /* webpackChunkName: "group-video" */ '../views/videoview/mv/MusicVideo.vue'
  )
const AllMv = () =>
  import(
    /* webpackChunkName: "group-video" */ '../views/videoview/mv/AllMv.vue'
  )
const TopMv = () =>
  import(
    /* webpackChunkName: "group-video" */ '../views/videoview/mv/TopMv.vue'
  )
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'homepage',
    children: [
      /* 发现音乐页 */
      {
        path: 'homepage',
        component: HomePage,
        redirect: '/personalrecom',
        children: [
          {
            path: '/personalrecom',
            component: PersonalRecom,
            meta: { title: '个性推荐' },
          }, //个性推荐
          { path: '/toplist', component: TopList, meta: { title: '排行榜' } }, //排行榜
          {
            path: '/playlist',
            component: PlayList,
            meta: { title: '歌单列表' },
          }, //歌单列表页
          {
            path: '/artistlist',
            component: ArtistList,
            meta: { title: '歌手列表' },
          }, //歌手页
          { path: '/zuixin', component: NewMusic, meta: { title: '最新音乐' } },
        ],
      },
      /* 视频列表页 */
      {
        path: 'videoview',
        component: VideoView,
        redirect: '/video',
        meta: { check: false },
        children: [
          {
            path: '/video',
            component: Video,
            meta: { check: false, title: '视频' },
          }, //video的首屏
          {
            path: '/mv',
            component: MusicVideo,
            meta: { check: false, title: 'MV' },
          }, //mv的首屏
        ],
      },
      /* 收藏页 */
      {
        path: 'subscribe',
        component: SubScribeView,
        redirect: '/sub-album',
        meta: { check: true },
        children: [
          {
            path: '/sub-album',
            component: SubAlbum,
            meta: { check: true, title: '收藏的专辑' },
          },
          {
            path: '/sub-artists',
            component: SubArtists,
            meta: { check: true, title: '收藏的歌手' },
          },
          {
            path: '/sub-mv',
            component: SubMv,
            meta: { check: true, title: '收藏的MV' },
          },
        ],
      },
      {
        path: 'search',
        component: SearchList,
        props: (route) => ({ keywords: route.query.keywords }),
        meta: { title: '搜索结果' },
      }, // 搜索展示页
      {
        path: 'playlistdetail/:id',
        component: PlayListDetail,
        props: true,
        meta: { title: '歌单' },
      }, //歌单详情页
      {
        path: 'playlistedit/:id',
        component: PlayListEdit,
        props: true,
        meta: { check: true, title: '编辑歌单' },
      }, //歌单编辑页
      {
        path: 'artistdetail/:id',
        component: ArtistDetail,
        props: true,
        meta: { title: '歌手主页' },
      }, //歌手详情页
      {
        path: 'albumdetail/:id',
        component: AlbumDetail,
        props: true,
        meta: { title: '专辑' },
      }, //专辑详情页
      {
        path: 'videodetail/:type/:id',
        component: VideoDetail,
        meta: { check: false, title: '视频' },
        props: true,
      }, //视频和MV详情页 type v:video mv:mv
      {
        path: 'userdetail/:id',
        component: UserDetail,
        props: true,
        meta: { title: '用户主页' },
      }, //用户详情页
      {
        path: 'useredit',
        component: UserEdit,
        meta: { check: true, title: '编辑个人信息' },
      }, //用户编辑页
      {
        path: 'recomsongs',
        component: RecommendSong,
        meta: { check: true, title: '每日推荐' },
      }, //每日推荐歌曲页
      {
        path: 'personalfm',
        component: PersonalFm,
        meta: { check: true, title: '私人FM' },
      }, //私人FM歌曲页
      {
        path: 'historyplay',
        component: HistoryPlay,
        meta: { title: '最近播放' },
      }, //最近播放页
      {
        path: 'allmv',
        component: AllMv,
        meta: { check: true, title: '全部MV' },
      }, //全部MV页
      {
        path: 'topmv',
        component: TopMv,
        meta: { check: true, title: 'MV排行榜' },
      }, //MV排行页
    ],
  },
  { path: '/login', component: Login, meta: { check: false, title: '登录' } }, //login
  { path: '*', component: NotFound, meta: { title: 'NotFound' } }, //404
]

export default routes
