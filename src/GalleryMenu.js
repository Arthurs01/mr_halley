import{Switch, Route, NavLink} from "react-router-dom";
import Concerts from "./Concerts";
import Live from "./Live";
import Members from "./Members";


export  function GalleryMenu() {
    return (
      <div className="gallery_menu">
        <div className="gallery_menu_flex">
         <ul>
           <li><NavLink to="/gallery/photos">Photos</NavLink></li>
           <li><NavLink to="/gallery/videos">Videos</NavLink></li>
           </ul>
        </div>
        <div className="line"></div>
        <div className="gallery_menu_flex_2">
          <Switch>
               <Route path="/gallery/photos"component={GalleryMenuPhotos}/>
                     <Route path="/gallery/videos"component={GalleryMenuVideos}/>
                     
  
          </Switch>
        
           
         </div>
                 
         </div>
    );
  }
  function GalleryMenuPhotos() {
    return (
      <div className="gallery_menu_photos">
        <div className="gallery_menu_photos_flex">
         <ul>
           <li><NavLink to="/gallery/photos/live" activeClassName="active">En vivo</NavLink></li>
           <li><NavLink to="/gallery/photos/members" activeClassName="active">Members</NavLink></li>
           </ul>
        </div>
        <div className="gallery_menu_photos_flex_2">
          <Switch>
               <Route path="/gallery/photos/live" component={Live}/>
               <Route path="/gallery/photos/members" component={Members}/>
               
               <Live/>
          </Switch>
         </div>
        </div>
    );
  }
  function GalleryMenuVideos() {
    return (
      <div className="gallery_menu_videos">
        <div className="gallery_menu_videos_flex">
         <ul>
           <li><NavLink to="/gallery/videos/concerts">Concerts</NavLink></li>
           <li><NavLink to="/gallery/videos/live">Live</NavLink></li>
           <li><NavLink to="/gallery/videos/others">Others</NavLink></li>
           </ul>
        </div>
        <div className="gallery_menu_videos_flex_2">
          <Switch>
               <Route path="/gallery/videos/concerts"component={Concerts}/>
               <Route path="/gallery/videos/live">Live</Route>
               <Route path="/gallery/videos/others">Others</Route>
               
         <Concerts/>              
          </Switch>
         </div>
        </div>
         
         );
        }
        
        export default GalleryMenu;