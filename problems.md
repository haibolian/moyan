# Record some questions as I complete the project

> I want to record it in english, which can improve my english

## why I cannot use env variables in vite.config.ts?

There's a chicken-egg problem here: Vite expects to resolve .env files from project root, but project root can be made different by the config file.

https://github.com/vitejs/vite/issues/1930#issuecomment-775293560


## Nine square layout of the picture.

> When the number of pictures is less than 4, they should not wrap. When the numebr is more than 4, they should wrap. How to control?

