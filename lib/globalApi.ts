import { dataProps, TeamMember, Testimonial } from '@/types';

type MetaProps = {
   pagination: {
      total: number;
      limit: number;
      page: number;
   };
};

interface ResponseProps {
   data: dataProps[];
   meta: MetaProps;
}

interface ResponseSingleProps {
   data: dataProps;
   meta: MetaProps;
}

export interface ResponseTestimonialsProps {
   data: Testimonial[];
}

interface ResponseTeamProps {
   data: TeamMember[];
}

enum Cache {
   NO_STORE = 'no-store',
   FORCE_CACHE = 'force-cache',
}

interface Next {
   revalidate?: number;
   cache?: Cache;
}

// Get baseURL and validate
const baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

if (!baseURL) {
   throw new Error('❌ Environment variable NEXT_PUBLIC_STRAPI_BASE_URL is not defined');
}

const fullURL = `${baseURL}/api`;

const fetcher = async <T>(
   endpoint: string,
   {
      next,
      cache,
   }: {
      next?: { revalidate?: number };
      cache?: Cache;
   } = {}
): Promise<T> => {
   try {
      const res = await fetch(`${fullURL}${endpoint}`, {
         headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
         },
         next,
         cache,
      });

      if (!res.ok) {
         console.warn(`⚠️ Warning: Failed to fetch ${endpoint}: ${res.statusText}`);
         return { data: [] } as unknown as T;
      }

      return res.json();
   } catch (error) {
      console.error(`❌ Network error for ${endpoint}:`, error);
      return { data: [] } as unknown as T;
   }
};

// API calls with optional revalidate + cache support
const getBrandings = (options?: { next?: Next }) => fetcher<ResponseProps>('/brandings?populate=*', options);
const getCreatives = (options?: { next?: Next }) => fetcher<ResponseProps>('/creatives?populate=*', options);
const getPrintables = (options?: { next?: Next }) => fetcher<ResponseProps>('/printables?populate=*', options);
const getProductPackagings = (options?: { next?: Next }) =>
   fetcher<ResponseProps>('/product-packagings?populate=*', options);
const getVideoAds = (options?: { next?: Next }) => fetcher<ResponseProps>('/video-ads?populate=*', options);
const getBlogs = (options?: { next?: Next }) => fetcher<ResponseProps>('/blogs?populate=*', options);
const getBlogDetails = (documentId: string, options?: { next?: Next }) =>
   fetcher<ResponseSingleProps>(`/blogs/${documentId}?populate=*`, options);
const getTeams = (options?: { next?: Next }) => fetcher<ResponseTeamProps>('/teams?populate=*', options);
const getTestimonials = (options?: { next?: Next }) =>
   fetcher<ResponseTestimonialsProps>('/testimonials?populate=*', options);

// Export as API object
const api = {
   getBrandings,
   getCreatives,
   getPrintables,
   getProductPackagings,
   getVideoAds,
   getBlogs,
   getBlogDetails,
   getTeams,
   getTestimonials,
};

export default api;