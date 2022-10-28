module.exports.viewAll = function(req, res) {
    const restaurants = [ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg',
        rating: 2,
        category: 'Italian',
        description: 'kfldsajfkl sajkl sajdklsjak jsakdljaskldajsd klsajdk sajdklsajdklsajdksaldjals daskdjslad'
    },
    {
        id: 2,
        name: 'Not Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/1900x1427.jpg',
        rating: 4,
        category: 'Italian',
        description: 'adlsfjksa dsalkdkslakd sakdlksalkd klsadksadlk klsadkl lksadlksadklkldsakd ksadklsakldaskldkasl'
    }];
    res.render('index', {restaurants});
}