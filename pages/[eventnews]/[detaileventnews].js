import Layout from '../../components/layout';
import { Typography } from '@material-ui/core';
export default function detailEventNews({eventnewslist}){
    return(
        <Layout>
        <div>
        <img src={`/assets/img/${eventnewslist.url}`} />
        <Typography>
        {eventnewslist.title}
        </Typography>
        </div>
        </Layout>
    )
}

detailEventNews.getInitialProps = async (ctx) =>{
    const {query} = ctx
    const response = await fetch('http://10.172.24.130/event/'+ query.detaileventnews)
    const eventnewslist = await response.json()
    return { eventnewslist: eventnewslist }
}