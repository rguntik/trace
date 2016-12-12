<?php
//$cache = Yii::$app->cache->;
//dump($traceData);
//exit;

/* @var $this yii\web\View */

$this->title = 'Trace main page';
?>
<div class="site-index">
    <div id="trace-body">
        <div style="margin: 5px 0;" id="trace-buttons">
            <button type="submit" class="btn btn-primary">OPEN ALL</button>
            <button type="submit" class="btn btn-primary">OPEN ALL TITLE</button>
            <button type="submit" class="btn btn-success">CLOSE ALL</button>
            <button type="submit" class="btn btn-success">CLOSE ALL TITLE</button>
        </div>
        <ul>
<!--            --><?// if ($this->beginCache('tt1', ['duration' => 10])) : ?>
                <?= $this->render('item', ['item' => $traceData, 'fieldsToShow' =>$fieldsToShow]); ?>
<!--                --><?// $this->endCache();  ?>
<!--            --><?// endif; ?>
        </ul>
    </div>
</div>
