<?php
//$cache = Yii::$app->cache->;
//dump($traceData);
//exit;

/* @var $this yii\web\View */

$this->title = 'Trace main page';
?>
<div class="site-index">
    <div id="trace-body">
        <div style="margin: 5px 0;">
                <button type="submit" class="btn btn-primary" id="show-all">SHOW ALL</button>
                <button type="submit" class="btn btn-success" id="hide-all">HIDE ALL</button>
        </div>
        <ul>
<!--            --><?// if ($this->beginCache('tt1', ['duration' => 10])) : ?>
                <?= $this->render('item', ['item' => $traceData]); ?>
<!--                --><?// $this->endCache();  ?>
<!--            --><?// endif; ?>
        </ul>
    </div>
</div>
