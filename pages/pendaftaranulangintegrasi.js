import React from 'react';
import MaterialTable from 'material-table';

export default function pendaftaranulangintegrasi() {
    const [dataPeserta, setDataPeserta] = React.useState([]);
    React.useEffect(() => {
        GetParticipant();
    }, []);

    async function GetParticipant() {
        const employer_id = "3d0e6a7d-3f6a-49e1-8541-fa8e4b839a01";
        await fetch('http://devsitara.tapera.go.id/reregistrationParticipants',
            {
                method: 'POST',
                body: JSON.stringify({
                    employer_id,
                }),
            })
            .then((r) => {
                console.log(r.status)
                const status = r.status;
                return r.json();
            })

            .then((data) => {
                console.log(JSON.stringify(data.participants[1].nik))
                console.log(JSON.stringify(data))
                setDataPeserta(data);
            })
    }

    console.log(JSON.stringify(dataPeserta.participants))
    

    const dataPeserta2 = [
        {"id":"8cea9b55-616e-457f-bf4c-3e9f0c4f77a3","nik":"008910921029109201","full_name":"Asep Cilok","gender":1,"birth_place":"Ciawi","birth_date":"03-07-2020","address_item":[{"address_type":1,"address":"Ciawi","rt_number":"008","rw_number":"008","village":"Ciawi","sub_district":"Ciawi","city":"Ciawi","postal_code":"54171","province":"Ciawi","country":"ID","city_code":"3345"},{"address_type":2,"address":"jl madura 3","rt_number":"001","rw_number":"001","village":"tajurhalang","sub_district":"tajurhalang","city":"kab.bogor","postal_code":"54171","province":"jawa barat","country":"ID","city_code":"3345"},{"address_type":3,"address":"jl dr.saharjo 44","rt_number":"001","rw_number":"001","village":"tebet","sub_district":"tebet","city":"jakarta selatan","postal_code":"54171","province":"dki jakarta","country":"ID","city_code":"3345"}]},
        {"id":"ef5f6b54-1349-418c-8c25-4b5481d2fe81","nik":"009910921029109201","full_name":"Endah Getuk","gender":1,"birth_place":"Purwokerto","birth_date":"03-07-2020","address_item":[{"address_type":1,"address":"Purwokerto","rt_number":"009","rw_number":"009","village":"Purwokerto","sub_district":"Purwokerto","city":"Purwokerto","postal_code":"54171","province":"Purwokerto","country":"ID","city_code":"3345"},{"address_type":2,"address":"jl madura 3","rt_number":"001","rw_number":"001","village":"tajurhalang","sub_district":"tajurhalang","city":"kab.bogor","postal_code":"54171","province":"jawa barat","country":"ID","city_code":"3345"},{"address_type":3,"address":"jl dr.saharjo 44","rt_number":"001","rw_number":"001","village":"tebet","sub_district":"tebet","city":"jakarta selatan","postal_code":"54171","province":"dki jakarta","country":"ID","city_code":"3345"}]},
    ]

    console.log(JSON.stringify(dataPeserta2))
    return (
        <div>
            <MaterialTable
                title="Tabel Data Peserta"
                columns={[
                    { title: 'ID', field: 'id' },
                    { title: 'NIK', field: 'nik' },
                    { title: 'Nama', field: 'full_name', defaultSort: "asc" },
                ]}
                data={dataPeserta2}
                options={{
                    search: false,
                    selection: true,
                }}
            />
        </div>
    )
}
