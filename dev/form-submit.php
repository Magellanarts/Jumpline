<?php

  if(!mail("magellanarts@gmail.com","My subject", "hello")){
    echo 'error';
  } else {
    echo 'sent';
  }
?>