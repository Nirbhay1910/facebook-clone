import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://s3images.zee5.com/wp-content/uploads/sites/7/2020/10/harrypotter.jpg'
        profileSrc='https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG'
        title='Draco Malfoy'
      />
      <Story
        image='https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/02/02/10/v2Harry-and-Hermione.jpg?width=982&height=726&auto=webp&quality=75'
        profileSrc='https://images4.alphacoders.com/826/thumb-1920-82604.jpg'
        title='Hermione Granger'
      />
      <Story
        image='https://funkymbti.files.wordpress.com/2020/08/voldemort.jpg?w=778'
        profileSrc='https://static.wikia.nocookie.net/harrypotter/images/a/aa/Voldemort-smiling.jpg/revision/latest/scale-to-width-down/340?cb=20180920185319'
        title='Tom Riddle'
      />
      <Story
        image='https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg'
        profileSrc='https://images.ctfassets.net/usf1vwtuqyxm/4kRGmTOvVYmIwsOikwcuUw/b0851098837ddac5951a15ebc2ab82cf/Ron_Weasley_WB_F1_Ron_with_Scabbers_on_shoulder_00393692.jpg?w=1200&fit=fill&f=top'
        title='Ron Weasley'
      />
      <Story
        image='https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/24/17/Albus-Dumbledore.jpg?width=1200'
        profileSrc='https://fastly.syfy.com/sites/syfy/files/2018/05/dumbledore.jpg'
        title='Albus Dumbeldore'
      />
    </div>
  );
}

export default StoryReel;
