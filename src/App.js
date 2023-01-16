import '../src/assets/style/style.scss';
import ApplicantDetails from './Container/ApplicantDetails';
import BankingDetails from './Container/BankingDetails';
import Footer from './Container/Footer';
import Header from './Container/Header';
import InvestmentDetail from './Container/InvestmentDetail';
import InvestmentRisk from './Container/InvestmentRisk';
import Nominee from './Container/Nominee';
import { FormProvider } from './Form/FormContext';

function App() {
  return (
    <div className="App">
      <Header/>
      <FormProvider>
      <div className='main bg-light'>
      <InvestmentDetail/>
      <ApplicantDetails/>
      <BankingDetails/>
      <Nominee/>
      <InvestmentRisk/>
      <Footer/>
      </div>
      </FormProvider>
      
    </div>
  );
}

export default App;


