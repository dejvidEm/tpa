import ButtonComponent from './components/ButtonComponent';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PlayerCard from './components/PlayerCard';
import TeamCard from './components/TeamCard';
import './index.css';

import { LuCross } from "react-icons/lu";


const App = () => {
  return (
    <div className='bg-[#0A2125] h-[200vh]'>
      <Navbar/>
      <ButtonComponent variant="primary" size="large">
        CALL TO ACTION
      </ButtonComponent>
      <ButtonComponent variant="primary" size="small">
        CALL TO ACTION
      </ButtonComponent>
      <ButtonComponent variant="secondary" size="large">
        CALL TO ACTION
      </ButtonComponent>
      <ButtonComponent variant="secondary" size="small">
        CALL TO ACTION
      </ButtonComponent>
      <Card cardName='Healthcare & Well-Being' title='Empowering Your Game Through Optimal Health' icon={<LuCross size={20} className='text-white'/>}></Card>
      <PlayerCard
        name="Lionel Messi"
        team="Inter Miami CF"
        image="/images/messi.png" // nahraď URL obrázkom hráča
        nationality="Argentine"
        league="Major League Soccer (MLS)"
        height="1.70 m"
        weight="72 kg"
        preferredFoot="Left"
        position="Forward"
        age={37}
      />
      <TeamCard logo='/images/image.png'></TeamCard>
      <Footer/>
    </div>
  )
}

export default App