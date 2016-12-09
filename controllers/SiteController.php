<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use yii\helpers\FileHelper;
use app\rglib\XtExplorer;

class SiteController extends Controller
{
    public function actionIndex()
    {
        $files = FileHelper::findFiles(ini_get('xdebug.trace_output_dir'), ['only'=>['*t.xt']]);
        $traceFile = reset($files);
        $traceExplorer = new XtExplorer($traceFile);

//        dump($traceExplorer->data);
//        var_dump($traceExplorer);
//        dump($traceExplorer);
//        exit;
        return $this->render('index', [
            'traceData' => $traceExplorer->data[0],
        ]);
    }

}
