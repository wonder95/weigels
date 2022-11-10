import * as prismic from '@prismicio/client';

const apiEndpoint = 'https://weigels-custom-laser-engravng.prismic.io/api/v2';

const Client = new prismic.Client(apiEndpoint);

export function getService(slug) {
    return Client.getByUID('service', slug);
};

export async function getFrontPage() {
    const client = await Client.getByType('front_page');
    return client;
    
};

export async function getAllServices() {
    const services = await Client.getByType("service"); 
    return services;
};

export function getAboutPage() {
    return Client.getSingle('about');
}

export async function getAllTechnologies() {
    const technologies = await Client.getByType("technology")
    return technologies;
}

export async function getAllClients() {
    const clients = await Client.getByType("logo")
    return clients;
}

export async function getAllBlogs() {
    const blogs = await Client.getByType("blog")
    // console.log(blogs)
    return blogs;
}