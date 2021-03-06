// Thông tin tài khoản
let emailAccount = "admin@gmail.com";
let passwordAccount = "admin";

// Định dạng hợp lệ của email
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Thông tin chi tiết các sản phẩm
let productDetails = [
    {
        id: 1,
        title: "NikeCourt Legacy Canvas",
        subtitle: "Men's Shoes",
        price: "1609000",
        offer: "- %20",
        category: "men",
        images: {
            large: [
                "images/products/large/products-01.png",
                "images/products/large/products-01(1).png",
                "images/products/large/products-01(2).png",
                "images/products/large/products-01(3).png",
                "images/products/large/products-01(4).png",
                "images/products/large/products-01(5).png",
                "images/products/large/products-01(6).png",
                "images/products/large/products-01(7).png",
            ],
            medium: [
                "images/products/medium/products-01.png",
                "images/products/medium/products-01(1).png",
                "images/products/medium/products-01(2).png",
                "images/products/medium/products-01(3).png",
                "images/products/medium/products-01(4).png",
                "images/products/medium/products-01(5).png",
                "images/products/medium/products-01(6).png",
                "images/products/medium/products-01(7).png",
            ],
            small: ["images/products/small/products-01.png"],
            thum: [
                "images/products/thum/products-01.png",
                "images/products/thum/products-01(1).png",
                "images/products/thum/products-01(2).png",
                "images/products/thum/products-01(3).png",
                "images/products/thum/products-01(4).png",
                "images/products/thum/products-01(5).png",
                "images/products/thum/products-01(6).png",
                "images/products/thum/products-01(7).png",
            ],
        },

        availability: "in stock",
        description: `<p>Honouring its history in tennis culture, the NikeCourt Legacy Canvas reinvents a classic with its modern, street-worthy design.Made from durable canvas and featuring heritage details, the style nods to those that inspired us all to carry sport and fashion beyond the boundary.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Colour Shown: White/Black/White</li><li class="description-preview__style-color ncss-li">Style: CW6539-100</li></ul>`,
    },
    {
        id: 2,
        title: "Nike Air Zoom Pegasus 39",
        subtitle: "Men's Road Running Shoes",
        price: "3519000",
        offer: "New",
        category: "men",
        images: {
            large: [
                "images/products/large/products-02.png",
                "images/products/large/products-02(1).png",
                "images/products/large/products-02(2).png",
                "images/products/large/products-02(3).png",
                "images/products/large/products-02(4).png",
                "images/products/large/products-02(5).png",
                "images/products/large/products-02(6).png",
                "images/products/large/products-02(7).png",
            ],
            medium: [
                "images/products/medium/products-02.png",
                "images/products/medium/products-02(1).png",
                "images/products/medium/products-02(2).png",
                "images/products/medium/products-02(3).png",
                "images/products/medium/products-02(4).png",
                "images/products/medium/products-02(5).png",
                "images/products/medium/products-02(6).png",
                "images/products/medium/products-02(7).png",
            ],
            small: ["images/products/small/products-02.png"],
            thum: [
                "images/products/thum/products-02.png",
                "images/products/thum/products-02(1).png",
                "images/products/thum/products-02(2).png",
                "images/products/thum/products-02(3).png",
                "images/products/thum/products-02(4).png",
                "images/products/thum/products-02(5).png",
                "images/products/thum/products-02(6).png",
                "images/products/thum/products-02(7).png",
            ],
        },
        availability: "in stock",
        description: `<p>Running is your daily ritual, with every step taking you closer to your personal goal. Let the Nike Air Zoom Pegasus 39 help you ascend to new heights—whether you're training or jogging—with its intuitive design. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Colour Shown: Pure Platinum/Mineral Slate/Bright Spruce/Total Orange</li><li class="description-preview__style-color ncss-li">Style: DH4071-003</li></ul>`,
    },
    {
        id: 3,
        title: "Nike Air Force 1 '07",
        subtitle: "Women's Shoe",
        price: "2649000",
        offer: "New",
        category: "women",
        images: {
            large: [
                "images/products/large/products-03.png",
                "images/products/large/products-03(1).png",
                "images/products/large/products-03(2).png",
                "images/products/large/products-03(3).png",
                "images/products/large/products-03(4).png",
                "images/products/large/products-03(5).png",
                "images/products/large/products-03(6).png",
                "images/products/large/products-03(7).png",
            ],
            medium: [
                "images/products/medium/products-03.png",
                "images/products/medium/products-03(1).png",
                "images/products/medium/products-03(2).png",
                "images/products/medium/products-03(3).png",
                "images/products/medium/products-03(4).png",
                "images/products/medium/products-03(5).png",
                "images/products/medium/products-03(6).png",
                "images/products/medium/products-03(7).png",
            ],
            small: ["images/products/small/products-03.png"],
            thum: [
                "images/products/thum/products-03.png",
                "images/products/thum/products-03(1).png",
                "images/products/thum/products-03(2).png",
                "images/products/thum/products-03(3).png",
                "images/products/thum/products-03(4).png",
                "images/products/thum/products-03(5).png",
                "images/products/thum/products-03(6).png",
                "images/products/thum/products-03(7).png",
            ],
        },
        availability: "in stock",
        description: `<p>The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Colour Shown: White/White/White/White</li><li class="description-preview__style-color ncss-li">Style: DD8959-100</li></ul>`,
    },
    {
        id: 4,
        title: "Nike Go FlyEase",
        subtitle: "Shoes",
        price: "3829000",
        offer: "New",
        category: "women",
        images: {
            large: [
                "images/products/large/products-04.png",
                "images/products/large/products-04(1).png",
                "images/products/large/products-04(2).png",
                "images/products/large/products-04(3).png",
                "images/products/large/products-04(4).png",
                "images/products/large/products-04(5).png",
                "images/products/large/products-04(6).png",
                "images/products/large/products-04(7).png",
                "images/products/large/products-04(8).png",
                "images/products/large/products-04(9).png",
                "images/products/large/products-04(10).png",
            ],
            medium: [
                "images/products/medium/products-04.png",
                "images/products/medium/products-04(1).png",
                "images/products/medium/products-04(2).png",
                "images/products/medium/products-04(3).png",
                "images/products/medium/products-04(4).png",
                "images/products/medium/products-04(5).png",
                "images/products/medium/products-04(6).png",
                "images/products/medium/products-04(7).png",
                "images/products/medium/products-04(8).png",
                "images/products/medium/products-04(9).png",
                "images/products/medium/products-04(10).png",
            ],
            small: ["images/products/small/products-04.png"],
            thum: [
                "images/products/thum/products-04.png",
                "images/products/thum/products-04(1).png",
                "images/products/thum/products-04(2).png",
                "images/products/thum/products-04(3).png",
                "images/products/thum/products-04(4).png",
                "images/products/thum/products-04(5).png",
                "images/products/thum/products-04(6).png",
                "images/products/thum/products-04(7).png",
                "images/products/thum/products-04(8).png",
                "images/products/thum/products-04(9).png",
                "images/products/thum/products-04(10).png",
            ],
        },
        availability: "in stock",
        description: `<p>Ditch the laces and get outside. These kicks feature Nike's revolutionary FlyEase technology, making on-and-off a breeze. With a heel that pivots open for a totally hands-free entry, they're great for people with limited mobility—or anyone who wants a quicker way to get going.</p><ul class="description-preview__features pt8-sm pb6-sm ncss-list-ul"><li class="description-preview__color-description ncss-li">Colour Shown: Sail/White/Light Bone/Black</li><li class="description-preview__style-color ncss-li">Style: DR5540-101</li></ul>`,
    },
];

// Định dạng thành tiền
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Thông tin liên hệ
let contact_info = {
    description:
        "Lorem ipsum dolor sit amet, consectetur ad ipis cing elit. Suspendisse at sapien mascsa. Lorem ipsum dolor sit amet, consectetur se adipiscing elit. Sed fermentum, sapien scele risque volutp at tempor, lacus est sodales massa, a hendrerit dolor slase turpis non mi.",
    email: ["contact@michaeldesign.me", "support@michaeldesign.me"],
    phone: ["084. 93 668 2236", "084. 93 668 6789"],
    address: "No.86 ChuaBoc St, DongDa Dt,<br />Hanoi, Vietnam",
};


