declare module '*.css';
declare module '*.scss';
declare module '*.sass';

interface ImportMeta {
  env: {
    [key: string]: string | undefined;
  };
}
