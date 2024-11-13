export const ALL_POSTS_QUERY = `
    query LoadAllPosts($after: String) {
        posts(first: 100, after: $after) {
            nodes {
                title
                slug
                date
                modified
                excerpt
                movie {
                    director
                    actors
                    releaseDate
                    youtubeId
                    imdbId
                    synopsis
                }
                featuredImageThumbnail: featuredImage {
                    node {
                    id
                    sourceUrl(size: THUMBNAIL)
                    altText
                    srcSet(size: THUMBNAIL)
                    sizes(size: THUMBNAIL)
                    mediaDetails {
                        width
                        height
                    }
                    }
                }
                featuredImageMedium: featuredImage {
                    node {
                    id
                    sourceUrl(size: MEDIUM)
                    altText
                    srcSet(size: MEDIUM)
                    sizes(size: MEDIUM)
                    mediaDetails {
                        width
                        height
                    }
                    }
                }
                featuredImageFull: featuredImage {
                    node {
                    id
                    sourceUrl(size: _2048X2048)
                    altText
                    srcSet(size: _2048X2048)
                    sizes(size: _2048X2048)
                    mediaDetails {
                        width
                        height
                    }
                    }
                }
                content(format: RENDERED)
                author {
                    node {
                        name
                    }
                }
                terms {
                    nodes {
                        name
                        slug
                    }
                }
                seo {
                    title
                    metaDesc
                    opengraphDescription
                    opengraphTitle
                    opengraphImage {
                        altText
                        sourceUrl
                        srcSet
                    }
                    opengraphUrl
                    opengraphSiteName
                    opengraphPublishedTime
                    opengraphModifiedTime
                    twitterTitle
                    twitterDescription
                    twitterImage {
                        altText
                        sourceUrl
                        srcSet
                    }
                    breadcrumbs {
                        url
                        text
                    }
                    cornerstone
                    schema {
                        pageType
                        articleType
                        raw
                    }
                }
                relatedPosts(where: { limit: 3 }) {
                    nodes {
                        title
                        slug
                        date
                        featuredImage {
                            node {
                                mediaItemUrl
                                sourceUrl(size: THUMBNAIL)
                                srcSet(size: THUMBNAIL)
                                sizes(size: THUMBNAIL)
                                altText
                            }
                        }
                    }
                }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
`;
