enum MemberShip {
    Simple,
    Standard,
    Premium
}

const membership = MemberShip.Standard;
const membershipRevers = MemberShip[2];

console.log(MemberShip)
console.log(membership)
console.log(membershipRevers)

enum SocialMedia {
    VK = 'Vk',
    FB = 'FB',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;
console.log(social)
