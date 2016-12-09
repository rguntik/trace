<?
$children = count($item['children'] > 0) && !empty($item['children']);
?>
<li class="function-item closed">
    <table>
        <? if ($children) : ?>
            <td style="" class="open-list">
                <button type="button" class="btn btn-default dropdown-toggle open-active">
                    <span class="caret"></span>
                </button>
            </td>
        <? endif; ?>
        <td>
            <div type="button" class="title btn btn-default" <? if ($children) : ?>style="border-top-left-radius: 0; border-bottom-left-radius: 0; border-left: none;" <? endif; ?>>
                <?= $item['functionName']; ?>
                <div class="function-description">
                   <? dump($item); ?>
                </div>
            </div>
        </td>
    </table>
    <? if ($children) : ?>
        <ul>
            <? foreach ($item['children'] as $val) : ?>
                <?= $this->render('item', ['item' => $val]); ?>
            <? endforeach; ?>
        </ul>
    <? endif; ?>
</li>