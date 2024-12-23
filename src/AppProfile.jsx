import './App.css';
import Profile from './components/Profile';
import ProductPhoto from './components/Avatar';
// import { NewBadge } from './components/Profile'

function AppProfile() {

  return (
    <>
      <Profile        
        image={"https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzh8fHxlbnwwfHx8fHw%3"}
        name={"Galaxy Book"}
        title={"삼성노트북"}
        status={'New'}
        />

      <Profile
        image={"https://images.unsplash.com/photo-1600262300216-f531931b5ab9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVCJUE3JUE1JUVCJUI2JTgxfGVufDB8fDB8fHww"}
        name={"Mac Book"}
        title={"애플 노트북"}
        status={'New'}
        />

        <ProductPhoto 
          image={"https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzh8fHxlbnwwfHx8fHw%3"}
          status='new'
        />
    </>
  );
}

export default AppProfile;

