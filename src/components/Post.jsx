import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

const Post = () => {
  return (
    <div>
      {/* First Post: Nature */}
      <Card
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '90%', md: '85%' }, 
          margin: '10px auto', 
          boxShadow: 3, 
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Elizabeth Rodrigues"
          subheader="January 25, 2025"
        />
        <CardMedia
          component="img"
          height="394"
          image="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Nature Landscape"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Embark on a journey through breathtaking landscapes, serene mountains, and lush greenery. Nature's beauty is unparalleled, offering peace and inspiration to all who explore it.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
          <ShareIcon />
        </CardActions>
      </Card>

      {/* Second Post: Baking Cake */}
      <Card
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '90%', md: '85%' },
          margin: '10px auto',
          boxShadow: 3,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Baking Enthusiast"
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Nina bakes"
          subheader="January 18, 2025"
        />
        <CardMedia
          component="img"
          height="394"
          image="https://images.pexels.com/photos/4686829/pexels-photo-4686829.jpeg"
          alt="Baking a Cake"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Dive into the art of baking with this delightful cake recipe. Whether you're a beginner or an expert, this recipe will add sweetness and joy to your kitchen adventures.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
          <ShareIcon />
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
