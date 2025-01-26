import React from 'react';
import { Box, List, Button, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            component='a'
                            href='#homepage'
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton
                            component='a'
                            href='#pages'
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component='a'
                            href='#groups'
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component='a'
                            href='#marketplace'
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component='a'
                            href='#home'
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component='a'
                            href='#home'
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component='a'
                            href='#home'
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component='a'
                            href='#home'
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'lightgray',
                                },
                            }}
                        >
                            <ListItemIcon>
                                <ModeNightIcon />
                            </ListItemIcon>
                            <Switch />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Card sx={{ maxWidth: 264 }}>
                    <CardMedia
                        sx={{ height: 100 }}
                        image="https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?auto=compress&cs=tinysrgb&w=600"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Discover the beauty of nature with our curated travel guides and outdoor tips. Plan your next holiday!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

            </Box>
        </Box>
    );
};

export default Sidebar;
