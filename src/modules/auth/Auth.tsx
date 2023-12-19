
import { Button, Image, Input, Select } from "../../components";
import company from '../../assets/company.png';
import { PAGE_CONTENT_APP } from '../../utils/constants'

export function Auth() {
  return (
    <main className='flex flex-col justify-center items-center h-[100vh]'>
      {/* <h1>Construyendo la página a partir del main</h1> */}

      <Image src={company} alt="logo-company" />

      <div>
        <label htmlFor="email">EMAIL</label>
        <Input id="email" type="text" />
      </div>

      <div>
        <label htmlFor="contraseña">CONTRASEÑA</label>
        <Input id="email" type="text" />
      </div>

      {/* <Select options={PAGE_CONTENT_APP.auth.mockData} optionStyleSelect={'warning'} required/> */}

      <Button optionStyleButtons={"warning"}>Send</Button>
    </main>
  );
}
