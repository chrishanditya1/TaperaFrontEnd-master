import Layout from "../components/layout";
import Informasi from "../components/informasi";
import fetch from 'node-fetch';


const Bantuan = (props) => (
    <div>
    <Layout>
    <Informasi mapdata={props.x}> </Informasi>   
    </Layout>
    </div>
    );
  
  Bantuan.getInitialProps = async function() {
    const res = await fetch('http://10.172.24.130/informations/faq')
    const info = await res.json()
    const res2 = await fetch('http://10.172.24.130/informations/bantuan')
    const data = await res2.json()
    const join = info.concat(data);
    const x = {bantuan:data, faq:info, joined:join}
    return { x : x}
  }


  export default Bantuan;
