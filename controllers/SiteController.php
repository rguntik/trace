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
        $fieldsToShow = [
            'level',
            'functionId',
            'entry',
            'timeIndex',
            'memory',
            'functionName',
            'functionType',
            'includeFile',
            'filePath',
            'lineNumber',
            'paramCount',
            'params',
            'children',
            'parentId',
        ];

        return $this->render('index', [
            'traceData' => $traceExplorer->data[0],
            'fieldsToShow' => $fieldsToShow
        ]);
    }

}
