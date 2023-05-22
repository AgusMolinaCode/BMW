
import imageUrlBuilder from '@sanity/image-url'
import { SanityClient } from '@sanity/client'

export const client = new SanityClient({
    projectId: 'hsnu30sj',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-04',
    token: 'skv5wvQsW4SBCHRrvKkRA88poGnRloGv1JpeeWV74j9Hn618EGE9U08Shmj1YSXQ3o4WrhCrKOu91fKo5ghfuciROuWlZuVK3IfQOO6gAjsZ4GlCUAVRaERxxzrqiUuW8lYULVjJzMJEbXg9LG0hX0zwLj8el1oXu3R30I7qAdw1sHe7J8T9',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);