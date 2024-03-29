const axios = require('axios');

// exports.createSight = async (newSight) => {
//     try {
//         const response = await axios.post('http://localhost:8080/sights', newSight);
//         console.log('Created sight:', response.data);
//     } catch (error) {
//         console.error('Error creating sight:', error.message);
//     }
// };

exports.getSightsByZone = async (req, res) => {
    try {
        const keyword = req.query.keyword;

        const response = await axios.get('http://localhost:8080/sights?keyword='+keyword);
        
        const sightsData = response.data;

        console.log('Sights Data:', sightsData);

        // 返回结果
        res.render(
            'sightPresent',
            {sights:sightsData}
        );
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send({
            status: 'error',
            message: 'Internal server error'
        });
    }
};

// // 调用上面的函数
// const newSight = {
//     sightName: 'sightName_example',
//     zone: 'zone_example',
//     category: 'category_example',
//     photoURL: 'photoURL_example',
//     description: 'description_example',
//     address: 'address_example'
// };

