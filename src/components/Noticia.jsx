import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'
import { margin } from '@mui/system'

export default function Noticia({noticia}) {
  const { description, source, title, url, urlToImage } = noticia

  return (
    <Grid item md={6} lg={4}>
        <Card>
            <CardMedia 
              component={"img"}
              image={urlToImage}
              alt={`Imagen de la noticia ${title}`}
              height={250}
            />              

            <CardContent>
               <Typography
               variant='body1'
               color='error'
               >
                {source.name}
               </Typography>
               <Typography
               variant='h5'
               component="div"
               >
                {title}
               </Typography>
               <Typography
               variant='body2'
               >
                {description}
               </Typography>

               <CardActions>
                  <Link
                    href={url}
                    target="_blank"
                    variant='button'
                    width={'100%'}
                    textAlign={'center'}
                    marginTop={2}
                    sx={{
                      textDecoration: 'none'
                      
                    }}
                  >
                  Leer Noticia</Link>
               </CardActions>
            </CardContent>
        </Card>
    </Grid>
  )
}
